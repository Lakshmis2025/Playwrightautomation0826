/*Login into OrangeHRMS-
Assert the following elements is visible or not
Time at work, MyActions, Quick Launch, Buzz Latest Posts, 
Employees on Leave Today, Employee Distribution by Sub Unit*/

import { test, expect } from '@playwright/test';

test('Assert the dashboard elements are visible or not', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.getByPlaceholder('username').fill('Admin');
await page.getByPlaceholder('password').fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('Time at Work', { exact: true })).toBeVisible();
await expect(page.getByText('My Actions', { exact: true })).toBeVisible();
await expect(page.getByText('Quick Launch', { exact: true })).toBeVisible();
await expect(page.getByText('Buzz Latest Posts', { exact: true })).toBeVisible();
await expect(page.getByText('Employees on Leave Today', { exact: true })).toBeVisible();
await expect(page.getByText('Employee Distribution by Sub Unit', { exact: true })).toBeVisible();
});


test.describe('Verify Each OrangeHRM Dashboard Element Is Visible', () =>{
test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('username').fill('Admin');
    await page.getByPlaceholder('password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
});

    test('Verify "Time at Work" is visible', async ({ page }) => {
        await expect(page.getByText('Time at Work', { exact: true })).toBeVisible();
 }); 
    test('Verify "My actions" is visible', async ({ page }) => {
        await expect(page.getByText('My Actions', {exact: true})).toBeVisible();

    });
});






