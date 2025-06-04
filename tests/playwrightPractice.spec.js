
import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {
   await page.goto("https://www.youtube.com/");


   let searchBox = page.locator("//input[@name='search_query']");

   await searchBox.click();

   await searchBox.fill('Cydeo');


   await searchBox.press("Enter");


   let firstResult = page.locator("(//a[@id='video-title'])[1]");

   await firstResult.click();

   // await page.waitForTimeout(10000);

});