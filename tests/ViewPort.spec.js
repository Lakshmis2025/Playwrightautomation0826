/*Write a Playwright test to open the DemoQA practice form, 
set the viewport size to 1366 × 768, enter "John" in the First Name field, 
enter "Smith" in the Last Name field, and 
enter "johnsmith@example.com" in the Email field.*/

import {test, devices} from '@playwright/test';
 test('Fill DemoQA practice form with viewport 390 x 844', async({page}) =>{
    await page.goto('https://demoqa.com/automation-practice-form');

    await page.setViewportSize({
        width: 390,
        height: 844
    });
    await page.getByRole('textbox',{name:'First Name'}).fill('John');
    await page.getByRole('textbox',{name:'Last Name'}).fill('Smith');
    await page.getByPlaceholder('name@example.com').fill('johnsmith@example.com');
});

test('Fill DemoQA practice form using iPhone 17 Pro Max viewport', async({page}) =>{
    await page.goto('https://demoqa.com/automation-practice-form');
    const Ph = devices['iPhone 17 Pro Max'];
    await page.setViewportSize(
        Ph.viewport
    );
    await page.getByRole('textbox',{name:'First Name'}).fill('John');
    await page.getByRole('textbox',{name:'Last Name'}).fill('Smith');
    await page.getByPlaceholder('name@example.com').fill('johnsmith@example.com');
});



