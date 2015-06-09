# GoogleMap Input Selector

This project helps you to place an input to your html form and get a **Place Location (Latitude & Longitude)** from user to save in your database.

## Installation

Add Maps from GoogleApi scripts and add jquery and webber-gmap-location.js to your _layout file.

Like This:
```
<script src="//maps.googleapis.com/maps/api/js"></script>
<script src="~/Scripts/jquery-1.10.2.min.js"></script>
<script src="~/Scripts/webber-gmap-location.js"></script>
```
or Use our bundle & cdn:
```
<script src="//maps.googleapis.com/maps/api/js"></script>
<script src="//cdn.adaksys.com/jquery-1.10.2.min.js"></script>
<script src="//demo.adaksys.com/GoogleMapSelector/Scripts/webber-gmap-location"></script>
```


## Usage

Just add `webber-gmap-location` CssClass to your input and enjoy.

No matter your inputType is `text` or `hidden`.

Sample1: `<input type="text" name="gpsLocation" class="webber-gmap-location" />`

Sample2: `<input type="hidden" name="gpsLocation" class="webber-gmap-location" />`

## Options

To customize map, simply add data attribute to your input:

`<input type="text" name="gpsLocation" class="webber-gmap-location" data-width="300px" data-height="300px" data-zoom="5" />`

## Demo

[Demo Website](http://demo.adaksys.com/GoogleMapSelector)

## License

Released under the MIT license.

Created by MohammadReza Daghestani, [ADAK SYS Co.](http://adaksys.com/)