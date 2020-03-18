'use strict'
// Author : Eric
// Version : 1.0.2

// export default class Page {
//   constructor(title) {
//     this.title = title
//   }

//   open(path) {
//     browser.url(`/${path}`)
//   }

//   getUrl() {
//     return browser.getUrl()
//   }
// }

import { DEFAULT_TIMEOUT } from '../helper/constants';


import helper from "../helper/common";

export default class Page {
  constructor(title) {
        this.title = title
      }

  async click(locator) {
    try {
      global.myallure.startStep("Click : " + locator);

      const element = await $(locator);
      await element.waitForExist(30000);
      await element.click();

      // browser.click('android=new UiSelector().text("LOGIN")');
      await element.touchAction([
        'press','release'
      ]);

      
      global.myallure.endStep("passed");
    } catch (error) {
      helper.allurescreenshot("Click : " + locator);
      console.log("Error :" + error);
      global.myallure.endStep("failed");
    }
  }

  async setValue(locator, value) {
    try {
      global.myallure.startStep("setvalue : " + locator);

      const element = await $(locator);
      await element.waitForDisplayed(30000);
      await element.clearValue();
      await element.setValue(value);

      global.myallure.endStep("passed");
    } catch (error) {
      helper.allurescreenshot("Click : " + locator);

      global.myallure.endStep("failed");
    }
  }

  async getTitle() {
    return browser.getTitle();
  }
  async waitForElementDisplayed(locator, waitingtime = 30000) {
    try {
      global.myallure.startStep("wait for element : " + locator);
      const element = await $(locator);
      await element.waitForDisplayed(waitingtime);
      // await element.waitForEnabled(waitingtime);
      global.myallure.endStep("passed");
      return true;
    } catch (error) {
      helper.allurescreenshot("waitForElement : " + locator);

      global.myallure.endStep("failed");
      return false;
    }
  }


  async waitForElement(locator, waitingtime = 30000) {
    try {
      global.myallure.startStep("wait for element : " + locator);
      const element = await $(locator);
      await element.waitForExist(waitingtime);
      // await element.waitForEnabled(waitingtime);
      global.myallure.endStep("passed");
      return true;
    } catch (error) {
      helper.allurescreenshot("waitForElement : " + locator);

      global.myallure.endStep("failed");
      return false;
    }
  }

 

  async newStep(step,expected,actual){
    global.myallure.startStep("step : " + step );
    if(expected == actual){
      global.myallure.endStep("passed");
    }else{
      global.myallure.endStep("failed");
    }
  }
}
