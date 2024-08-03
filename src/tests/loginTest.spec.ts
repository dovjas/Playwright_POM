import {test, expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('Login test',async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterLoginData('dovydas.jaseliunas-r0jg@force.com','Lakunas1');
})