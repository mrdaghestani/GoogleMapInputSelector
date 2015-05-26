$(document).ready(function () {
    $('input.webber-gmap-location').each(function () {
        var item = $(this);
        var gMapId = item.data('gmapid');
        if (gMapId == null || gMapId == undefined) {
            var idI = 1;
            gMapId = 'gmapid_';
            while ($('#' + gMapId + idI.toString()).length > 0) {
                idI++;
            }
            gMapId = gMapId + idI.toString();
            item.data('gmapid', gMapId);

            var width = item.data('width');
            var height = item.data('height');
            if (width == undefined) width = '300px';
            if (height == undefined) height = '300px';

            item.after('<div id="' + gMapId + '" style="width:' + width + ';height:' + height + ';"></div>');

            var lat = null;
            var long = null;

            var inputValue = item.val();

            if (inputValue == null || inputValue == '') {
                inputValue = item.data('init');
            }
            if (inputValue == null || inputValue == '' || inputValue == undefined) {
                inputValue = '35.724105,51.404229';
            }

            var splited = inputValue.toString().split(',');
            if (splited.length == 2) {
                if (!isNaN(Number(splited[0]))) {
                    lat = Number(splited[0]);
                }
                if (!isNaN(Number(splited[1]))) {
                    long = Number(splited[1]);
                }
            }
            console.log(Number(lat));
            var zoom = Number(item.data('zoom'));

            var mapProp = {
                center: new google.maps.LatLng(lat, long),
                zoom: isNaN(zoom) ? 5 : zoom,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById(gMapId), mapProp);
            item.data('map', map);
            var marker = new google.maps.Marker({
                position: mapProp.center,
            });
            marker.setMap(map);
            item.data('marker', marker);

            google.maps.event.addListener(map, 'click', function (event) {
                item.val(event.latLng.A.toString() + ',' + event.latLng.F.toString());
                marker.setPosition(event.latLng);
            });

            item.keyup(function () {
                var lat = null;
                var long = null;

                var inputValue = item.val();
                var splited = inputValue.toString().split(',');
                if (splited.length == 2) {
                    if (!isNaN(Number(splited[0]))) {
                        lat = Number(splited[0]);
                    }
                    if (!isNaN(Number(splited[1]))) {
                        long = Number(splited[1]);
                    }
                }
                marker.setPosition(new google.maps.LatLng(lat, long));
                map.panTo(new google.maps.LatLng(lat, long));
            });
        }
    });
});