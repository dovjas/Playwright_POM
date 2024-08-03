import {Page, expect} from '@playwright/test';
import HomePage from './HomePage';
import logger from '../utils/LoggerUtil';

export default class Loginpage{ 
  private readonly usernameSel = '#username';
  private readonly passwordSel = '#password';
  private readonly loginBtnSel = '#Login';
  private readonly loggedInTile = 'h2.spotlightTitleText'
  private mypage:Page;

  constructor(private page: Page){

  }

  async navigateToLoginPage(){
    await this.page.goto('/');
    logger.info('Navigate to login page')
  }
  async enterLoginData(username: string, password: string){
    await this.page.locator(this.usernameSel).fill(username);
    logger.info('Filled username')
    await this.page.locator(this.passwordSel).fill(password);
    logger.info('Filled password')
    await this.page.locator(this.loginBtnSel)
    .click()
    .catch((error)=>{
      logger.error(`Error clicking login button ${error}`);
      throw error;
    }).then(()=>logger.info('Clicked Login Button'));

    const homepage = new HomePage(this.page);
    return homepage;
  };
}