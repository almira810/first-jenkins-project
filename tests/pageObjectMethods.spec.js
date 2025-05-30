import { expect, test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {

    //goto mehtod set up
    await page.goto('https://practice.cydeo.com/');
    let actualTitle = await page.title();
    console.log(actualTitle);
    //await page.waitForTimeout(3000);

});

test('Getting the current URL of the page', async ({ page }) => {

    await page.goto('https://practice.cydeo.com/');
    let currentURL = page.url();
    console.log(currentURL);


});

test('Set the window size', async ({ page }) => {

    page.setViewportSize({width:1400, height: 1080});

    await page.goto('https://practice.cydeo.com/');

    //await page.waitForTimeout(3000);


});