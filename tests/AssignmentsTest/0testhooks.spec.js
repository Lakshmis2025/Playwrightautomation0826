/*using Playwright hooks. Write two separate test cases: 
one to get and print the logged-in user name, and 
another to count and print the number of canvas elements on the dashboard. 
Perform logout after each test.*/

import { test, expect } from '@playwright/test';

test.describe('Get and Print usersname and canvas count by using playwright hooks', () => {
    test.beforeEach( async ({ page }) => { 
        await page.goto('/')
        await page.getByPlaceholder('username').fill('Admin');
        await page.getByPlaceholder('password').fill('admin123');
        await page.getByRole('button', { name:'Login' }).click();
        await expect(page).toHaveURL(/dashboard/);
    });
test('Get and Print usersname', async ({ page }) => {
            const usersname = await page.locator('.oxd-userdropdown-name').textContent();
            console.log(usersname);
        })
test('Get and Print the canvascount', async ({ page }) => {
    const canvascount = await page.locator('canvas').count();
    console.log(canvascount);
})

test.afterEach( async ({ page }) => {
    await page.locator('.oxd-userdropdown-tab').click();
    await page.getByText('Logout', {exact:true}).click();
});
});
