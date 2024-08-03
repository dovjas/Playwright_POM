import {Page} from '@playwright/test';
import { error } from 'console';

export default class Loginpage{ 
  private readonly usernameSel = '#username';
  private readonly passwordSel = '#password';
  private readonly loginBtnSel = '#Login';
  private mypage:Page;


  constructor(private page: Page){

  }

  async navigateToLoginPage(){
    await this.page.goto('/');
  }
  async enterLoginData(username: string, password: string){
    await this.page.locator(this.usernameSel).fill(username);
    await this.page.locator(this.passwordSel).fill(password);
    await this.page.locator(this.loginBtnSel)
    .click()
    .catch((error)=>{
        console.error(`Error clicking login button ${error}`);
        throw error;
    });

    
  };
}