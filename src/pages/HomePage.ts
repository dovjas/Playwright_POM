import {Page, expect} from '@playwright/test';
import logger from '../utils/LoggerUtil';

export default class HomePage{
    private readonly loggedInTitle = 'h2.spotlightTitleText'

    constructor(private page:Page){

    };

async expectLoggedInTitle(){
    await this.page.waitForSelector(this.loggedInTitle);
    await expect(this.page.locator(this.loggedInTitle)).toBeVisible()
    .catch((error)=>{
        logger.error(`Error on showing logged in title ${error}`);
        throw error;
    }).then(()=>{
        logger.info('Logged in title is showing');
        })
    };
}