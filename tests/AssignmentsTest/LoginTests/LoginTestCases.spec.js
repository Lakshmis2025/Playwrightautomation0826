import { test, expect } from '@playwright/test';
test.describe('LoginTestcases',() => {
test.beforeEach(async ({ page }) => {
await page.goto('https://practicetestautomation.com/practice-test-login/');
});
test ('Positive Login test', async ({ page }) => {    
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', {name : /submit/i}).click();
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await page.getByRole('link', { name: 'Log out' }).click();   
});

test('Negative Username test', async ({ page }) => {
    await page.getByLabel('Username').fill('incorrectUser');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', {name : /submit/i}).click();
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
    
});

test('Negative Password test', async ({ page }) => {
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('incorrectPassword');
    await page.getByRole('button', {name : /submit/i}).click();
    await expect(page.locator('#error')).toHaveText('Your password is invalid!');
    
});

test('Empty fields', async ({ page }) => {
    await page.getByLabel('Username').fill('');
    await page.getByLabel('Password').fill('');
    await page.getByRole('button', {name : /submit/i}).click();
    await expect(page.locator('#error')).toHaveText('Your username is invalid!');
    });
});