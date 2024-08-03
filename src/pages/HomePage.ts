import {Page, expect} from '@playwright/test';

export default class HomePage{
    private readonly serviceTtitleLocator = 'Service';

    constructor(private page:Page){

    };

async expectServiceTitle(){
    await expect(this.page.getByTitle(this.serviceTtitleLocator)).toBeVisible();
    };
}