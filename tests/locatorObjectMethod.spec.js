import { test } from '@playwright/test';

test.describe('TEstGroup', () => {

    test.beforeEach( async({page})=>{
   await page.goto("https://practice.cydeo.com/");
    })
  test('Check() checks the radio buttons and checkboxes if they havnt been checked yet', async ({page}) => {
    let chechboxLink =  page.locator("text='Checkboxes'");
    await chechboxLink.click();
     //await page.waitForTimeout(3000);
    let checkbox1 = page.locator("//input[@id='box1']");
    await checkbox1.check();
     //await page.waitForTimeout(3000);

  });


  test('unchecked() unchecks the radio buttons and checkboxes if they havnt been unchecked yet', async ({page}) => {
    let chechboxLink =  page.locator("text='Checkboxes'");
    await chechboxLink.click();
     //await page.waitForTimeout(3000);
    let checkbox2 = page.locator("input#box2"); 
    await checkbox2.uncheck();
  });


  test('selectOption() used for dropdowns', async ({page}) => {
    let dropdownLink = page.locator("text='Dropdown'");
    await dropdownLink.click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");
   await simpleDropdown.selectOption("Option 1");
  });

  test('innerText() retrives the visible text', async({page})=>{
   let header = page.locator("//span[@class='h1y']");
   let actualText = await header.innerText();
   console.log(actualText);
   
  })

  test('inputValue(): only works with <input>, <textarea>, <select>', async({page})=>{
    //let inputLink = page.locator("text='Inputs'");
    let inputLink = page.getByText("Inputs");
    await inputLink.click();

    let inputBox = page.locator("//input[@type='number']");

    await inputBox.fill("1234");

     let inputValue = await inputBox.inputValue();
     console.log(inputValue);

    //son değişlik
  })
});
