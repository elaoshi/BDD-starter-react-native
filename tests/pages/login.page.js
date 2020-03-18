import { siteCredentials as credentials } from '../utils/utils'
import Page from "./page";

const SELECTORS = {
  LOGIN_SCREEN: '~Login-screen',
  LOGIN_CONTAINER_BUTTON: '~button-login-container',
  SIGN_UP_CONTAINER_BUTTON: '~button-sign-up-container',
  LOGIN_BUTTON: '~btn_login',
  SIGN_UP_BUTTON: '~btn-tab-REGISTER',
  INPUT: '~email',
  PASSWORD: '~password',
  REPEAT_PASSWORD: '~repeat_email',
  BUTTON_NEXT:'~btn-next',
  SUBMIT:'~btn-submit',
  TERMS:'~terms',
  POLICY:'~policy'

};

class LoginPage extends Page{
  
  constructor () {
      super(SELECTORS.LOGIN_BUTTON);
  }

  get usernameInput() { return $(SELECTORS.INPUT); }
  get loginBtn() { return $(SELECTORS.LOGIN_BUTTON); }


  async loginInit(email, password) {
    browser.pause(2000);

    console.log(email);
    console.log(password);

    const emailInput = await $(SELECTORS.INPUT);

    emailInput.setValue(email);
    console.log("set email...");
   
    browser.pause(2000);
   
    const passInput = await $(SELECTORS.PASSWORD);
    passInput.setValue(password); // work!
    console.log("set password...");

  }

  logout() {
    this.hamburguerMenu.click()
    browser.pause(2000)
    browser.touchAction([{action: 'press', x: 50, y: 0}, { action: 'moveTo', x: 50, y: 500 }, 'release'])//Perform a swipe down
    this.signOut.click()
    browser.pause(2000)
    this.signOutConfirmation.click()
  }

  async checkInputs(){
    await this.waitForElementDisplayed(SELECTORS.INPUT);
    

    return await this.waitForElementDisplayed(SELECTORS.PASSWORD);
  }
  async checkLoginBtn(){
    browser.pause(2000);
    return await this.waitForElementDisplayed(SELECTORS.LOGIN_BUTTON);
  }
  async checkNoExist(){
    return await this.waitForElement(SELECTORS.SIGN_UP_CONTAINER_BUTTON,3000);
  }

  async clickLogin(){
    const btn = await $(SELECTORS.LOGIN_BUTTON);

    const text = await btn.getText();
    console.log(text);

    btn.touchAction([
      'press','release'
    ]);
    
    console.log("login btn click"); 
    browser.pause(2000);

  }

 
  async checkMain(){
    browser.pause(2000);
  }


}

export default new LoginPage()
