// Author : Eric
// Version : 1.0.2

const fs = require("fs");
const path = require("path");

export default {
  async allurescreenshot(stepname) {
    const d = new Date();
    const screenfolder = path.normalize("./tests/reports/screenshots/");
    await browser.saveScreenshot(screenfolder + stepname + d + ".png");
    const imgbuf = fs.readFileSync(screenfolder + stepname + d + ".png");
    global.myallure.addAttachment("screenshot", Buffer.from(imgbuf, "base64"));
  }
};
