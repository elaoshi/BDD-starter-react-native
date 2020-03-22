import { expect }   from 'chai';
import LoginPage from '../pages/login.page';
import { siteCredentials as credentials } from '../utils/utils';
// Author : Eric
// Version : 1.0.2
import hook from "../helper/hooks";
import getcasedetail from "../helper/data";
import loginPage from '../pages/login.page';


var testdata = require("../data/demo.json");

var data = getcasedetail(testdata, "simplecase");
data.forEach(function(caseitem) {
    
  hook.testwithAllure("mobile page with " + caseitem.username, function() {
    it("should enable to view other menu ", async () => {
  
        await LoginPage.checkLoginBtn();
        await LoginPage.checkInputs();
        console.log("caseitem.username",caseitem.username);
        console.log("caseitem.userpassword",caseitem.userpassword);
        // await LoginPage.loginInit(caseitem.username, caseitem.userpassword);
        await LoginPage.clickRegister();
        await loginPage.setRegisterInfo(caseitem.username, caseitem.userpassword);

        // await LoginPage.checkNoExist();
        await LoginPage.checkRegisterConfirmPassword();  
        
    });
  });
});
