using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace GoogleMapSelector
{
    public class BundleConfig
    {
        public void RegisterBundles(BundleCollection bundles)
        {
            bundles.IgnoreList.Clear();
            bundles.DirectoryFilter.Clear();
            bundles.IgnoreList.Ignore("*.intellisense.js");
            bundles.IgnoreList.Ignore("*-vsdoc.js");
            bundles.IgnoreList.Ignore("*.debug.js", OptimizationMode.WhenEnabled);

            bundles.Add(new ScriptBundle("~/Scripts/webber-gmap-location").Include("~/Scripts/webber-gmap-location.js"));

            BundleTable.EnableOptimizations = true;
        }
    }
}