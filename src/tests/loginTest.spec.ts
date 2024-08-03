import {test, expect} from '@playwright/test';
import {encrypt, decrypt} from '../utils/CryptoJsUtil';
import {encryptEnvFile, decryptEnvFile} from '../utils/EncryptEnvFile';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';



test('Login test',async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
    await loginPage.enterLoginData(decrypt(process.env.username1!), decrypt(process.env.password!));
    
    const homepage = new HomePage(page);
    await homepage.expectLoggedInTitle();
})
test.skip('Encrypt',()=>{
    encryptEnvFile();
})