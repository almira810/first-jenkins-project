import { test } from '@playwright/test';

test('Youtube Search', async ({ page }) => {

  await page.goto("https://www.youtube.com/");

  await page.waitForTimeout(3000);

  let searchBox = page.locator("//input[@name='search_query']");

  searchBox.click();

  await searchBox.fill("Cydeo");

  await page.waitForTimeout(3000);

  await searchBox.press("Enter");

  await page.waitForTimeout(3000);

  let firstResult= await page.locator("(//a[@id='video-title'])[1]" ).click();

  //await page.waitForTimeout(7000);

});

/*
<input name="search_query" aria-controls="i0" aria-expanded="true" type="text" 
autocomplete="off" autocorrect="off" aria-autocomplete="list" role="combobox" 
class="ytSearchboxComponentInput yt-searchbox-input title" placeholder="Ara">
*/
