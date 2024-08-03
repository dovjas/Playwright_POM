import {Page, expect} from '@playwright/test';

export default class HomePage{
    private readonly loggedInTile = 'h2.spotlightTitleText'

    constructor(private page:Page){

    };

async expectLoggedInTitle(){
    await this.page.waitForSelector(this.loggedInTile);
    await expect(this.page.locator(this.loggedInTile)).toBeVisible();
    };
}