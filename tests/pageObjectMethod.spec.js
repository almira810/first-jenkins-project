import { test,expect } from '@playwright/test';

test('Getting the title of the page', async ({page}) => {
  await page.goto("https://practice.cydeo.com/");
  let actualTitle = await page.title();
console.log(actualTitle);
});


test('Getting the current URL of the page', async ({page}) => {
    await page.goto("https://practice.cydeo.com/");
    let actualURL = page.url();
    expect(actualURL).toBeTruthy();


});


test('Set the window siz', async ({page}) => {
    await page.goto("https://practice.cydeo.com/");

    let windowSize = page.viewportSize();
    expect(windowSize).toBeDefined();
});
