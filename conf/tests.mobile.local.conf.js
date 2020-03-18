require('dotenv').config()
let appiumController = require('appium-controller')
const defaultTimeoutInterval = process.env.DEBUG ? 99999999 : 60000;
const { join } = require('path');
exports.config = {
  
  host: '127.0.0.1',
  port: 4723,
  specs: ['./tests/specs/homePage.spec.js'],
  exclude: [],

//Documentation for this capabilities are located here:
//https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/caps.md
  capabilities: [
    // {
    //     automationName: 'Appium',
    //     appiumVersion: '1.9.0',//Appium version installed on your PC
    //     platformName: 'Android',//Which mobile OS platform to use
    //     platformVersion: '7.0',//Mobile OS version
    //     deviceName: 'e089d27b',
    //     browserName: '',//Name of mobile web browser to automate. Should be an empty string if automating an app instead. 
    //     app: '.\\app\\Evernote.apk',
    //     clearSystemFiles: true
    // }

    {
      //iphone work
        // The defaults you need to have in your config{
          //https://github.com/webdriverio/appium-boilerplate/blob/master/config/wdio.ios.app.conf.js
      maxInstances: 1,
      // browserName: 'safari',
      // appiumVersion : '1.7.2',
      deviceName : 'iPhone X',
      orientation: 'PORTRAIT',
      platformVersion : '11.4',
      platformName : 'iOS',
      app: join(process.cwd(), './app/test.app'),
      noReset: true,
      newCommandTimeout: 240,
    },
    // {  # andooid work
    //     automationName: 'UiAutomator2',
    //     deviceName: 'Pixel_8.1',
    //     platformName: 'Android',
    //     platformVersion: '8.1',
    //     orientation: 'PORTRAIT',
    //     maxInstances: 1,
    //     app: join(process.cwd(), './app/app-debug.apk'),
    //     // Read the reset strategies very well, they differ per platform, see
    //     // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    //     noReset: true,
    //     newCommandTimeout: 240,
    // }
  ],

    
  logLevel: 'silent',
  sync: true,
  coloredLogs: true,
  reporters: ['spec'],
  screenshotPath: './errorShots/',
  waitforTimeout: 90000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['appium'],//For Mobile local tests
  
  appium: {
        waitStartTime: 3000,
        // command: 'appium.cmd',
        logFileName: 'appium190.log',
        args: {
            platformName: 'iOS',
            address: '127.0.0.1',
            port: 4723,
            newCommandTimeout: '7200',
            sessionOverride: true,
            debugLogSpacing: true,
          }
        },


  framework: 'mocha',
  mochaOpts: {
    // timeout: 30000,
    timeout: defaultTimeoutInterval,
    ui: 'bdd',
    compilers: ['js:@babel/register']
  },

    // =====
    // Hooks
    // =====
    // WedriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed before test execution begins. At this point you can access all global
    // variables, such as `browser`. It is the perfect place to define custom commands.
    onPrepare: function() {
      //Start the appium server with default host:localhost, port:4723
      //require('@babel/register');
      appiumController.startAppium();
    },
    beforeSession: (config, capabilities, specs) => {
      //require('@babel/register');
    },
    before: function() {
      //Setup the Chai assertion framework
      const chai    = require('chai');
      global.expect = chai.expect;
      global.assert = chai.assert;
      global.should = chai.should();
    },
    //
    onComplete: function () {
      //Stop the appium server with default host:localhost, port:4723
      appiumController.stopAppium();
    }
}