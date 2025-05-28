//Create a test group with three tests in it with empty test body, and all functions must be async

import { test } from '@playwright/test';

test.describe('Test Group', () => {
    test.beforeEach( async ({page}) => {
         await page.goto("https://practice.cydeo.com/");
      });

  test('check(), checks the radio buttons and checkboxes if they havent been checked yet', async ({page}) => {
    let checkbox = page.locator("//a[@href='/checkboxes']");
    await checkbox.click();
    //await page.waitForTimeout(3000);

    let checkBox1 = page.locator("#box1");
    await checkBox1.check();


  });

  test('uncheck(), uncheck the radio button and checkboxes if they havent been unchecked yet ', async ({page}) => {
    let checkbox = page.locator("//a[text()='Checkboxes']");
    await checkbox.click();

    let checkBox2 = page.locator("#box2");

        await checkBox2.uncheck();
        //await page.waitForTimeout(3000);

     
  });

  test('selectOption() used for dropdown', async ({page}) => {


    
    let dropdownLink = page.locator("//a[text()='Dropdown']");
    await dropdownLink.click();

    let simpleDropdown = page.locator("//select[@id='dropdown']");
    //select by visible text:
    await simpleDropdown.selectOption({label: "Option 1"});
    

    //select by index:
    let yearOfBirth = page.locator("//select[@id='year']");
    await yearOfBirth.selectOption({index: 34} );
    
    let monthOfBirth = page.locator("//select[@id='month']");
    await monthOfBirth.selectOption({index: 7});

    let dateOfBirth = page.locator("//select[@id='day']")
     await dateOfBirth.selectOption({index : 9});


    //selevt by value
    let stateSelection = page.locator("//select[@id='state']");
    await stateSelection.selectOption("HI");

    //by visible text:
    let programmingLanguage = page.locator("//select[@name='Languages']");
    await programmingLanguage.selectOption({label: "JavaScript"});

     await page.waitForTimeout(3000);

  });

  test('innerText() retrieves the visible text', async ({page}) => {
    let headerElement = page.locator("//span[@class='h1y']");
    let actualText = await headerElement.innerText();
    console.log(actualText);
         //await page.waitForTimeout(3000);

  });

  test('inputValue(): only works with <input tag>, <text area>, <select> ', async({page})=>{

     let inputsLink = page.getByText("Inputs");
     //await inputsLink.scrollIntoViewIfNeeded();
   // await page.waitForTimeout(3000);
     await inputsLink.click();


     let inputBox = page.locator("//input[@type='number']");
     await inputBox.fill("2345");
     //await page.waitForTimeout(3000);

     let inputValue = await inputBox.inputValue();
     console.log(inputValue);

  })
});
