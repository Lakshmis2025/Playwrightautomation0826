/*Write a Playwright negative test for the ParaBank Registration page. 
Without entering any data, click Register and 
verify the First Name required validation 

Open the ParaBank Registration page.
Do not fill any information.
Click Register.
Verify the First Name error*/

import { test, expect } from '@playwright/test';
test('ParaBank Registration Negative test scenarios', async({ page })  => {
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');
    //await page.getByRole('button', {name:'REGISTER'}).click();
      await page.locator('[value="Register"]').click();
    //await page.locator('[type="submit"]').click();
    //await page.locator('//input[@value="Register"]').click();
    await expect(page.locator('[id="customer.firstName.errors"]')).toBeVisible();
    //await expect(page.locator("//span[text()='First name is required']")).toBeVisible();
//await expect(page.getByText('First name is required')).toBeVisible();
//await expect(page.locator('//span[contains(text(),"First name")]')).toBeVisible();
});
