module.exports = ({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

   baseUrl:"https://magento.softwaretestingboard.com" ,
    experimentalstudio:true,
    trashAssetsBeforeRuns:true,
   // screenshotOnRunFailure:"folderNameForScreen ",  
   video:true,
   // videoFolder:"myvideos",


   reporter: "mochawesome",
   reporterOptions: {
     reportDir: "cypress/myReport", // where to save in directory
     overwrite: false,
     html: true,
     json: false,
     timestamp: "mmddyyyy_HHMMss"
 }
 

  },
});
