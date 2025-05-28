import { test } from '@playwright/test';

test.describe("Test Group 1", ()=>{

    test.beforeAll( () => {
        console.log("BeforeAll is executed");
    });
    test.afterAll( () => {
        console.log("AfterAll is executed");
    });

    
    test.beforeEach( () => {
        console.log("BeforeEach is executed");
    });
    test.afterEach( () => {
        console.log("AfterEach is executed");
    });


test('Test Group 1', async ({ page }) => {
  console.log("Test Group 1 is executed");
});

test('Test Group 2', async ({ page }) => {
  console.log("Test Group 1 is executed");
});

test('Test Group 3', async ({ page }) => {
  console.log("Test Group 1 is executed");
});
});