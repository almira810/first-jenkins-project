import { test } from '@playwright/test';
test.describe(' @smoke Group', () => {

   test.beforeEach( async({page}) => {
     await page.goto('https://example.com/');
   });
   test.afterEach( async({page}) => {
   // await page.waitForTimeout(3000);
   });


    test(' Getting the title of the page', async ({ page }) => {

      console.log(await page.title());
    });
  
    test('Getting the current URL of the page', async ({ page }) => {
      console.log( page.url());  
   });
  
  });