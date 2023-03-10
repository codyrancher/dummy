
module.exports = { 
      attributes: {},
    
      body: "# Images #\nThis folder contains all the images that have the Rancher-specific content in them.\nYou can replace them by running the `rancher/rancher` container with:\n\n```-v /path/to/your/logos:/usr/share/rancher/ui-dashboard/dashboard/_nuxt/assets/images/pl```\n\nThis replaces the entire folder, so you must supply all the files or they will be missing.\n\n| File                        | Usage                                                     |\n|:--------------------------- |:----------------------------------------------------------|\n| half-logo.svg               | In the page header                                        |\n| login-landscape.svg         | On the login screen                                       |\n| setup-step-one.svg          | Initial setup screens                                     |\n",
     }