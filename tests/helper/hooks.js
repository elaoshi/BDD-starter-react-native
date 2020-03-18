import helper from "./common";
const Allure = require("allure-js-commons");

export default {
  testwithAllure(name, body) {
    describe(name, function() {
      // common before
      before(async function() {
        // console.log("befor...");
        global.featurename = name;
        if (global.myallure === undefined) {
          global.myallure = new Allure();
        }
        global.myallure.startSuite(name);

      });

      // common before each of test
      beforeEach(async function() {
        global.myallure.startCase(this.currentTest.title);
      });

      body();


      // common after each of test
      afterEach(async function() {
        await helper.allurescreenshot("test end");
        global.myallure.endCase(this.currentTest.state);
      });
      
      after(async function() {
        global.myallure.endSuite();
      });
    });
  }
};
