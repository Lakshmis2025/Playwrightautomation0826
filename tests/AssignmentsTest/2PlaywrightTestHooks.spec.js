/*Login to OrangeHRM and verify that the following menu items are visible:
 Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, 
 Directory, Maintenance, Claim, and Buzz. 
 Write a separate Playwright test for each menu item and use beforeEach() 
 for the login steps.*/

import {test, expect} from "@playwright/test";
test.describe("Validate OrangeHRM dashboard Menu Items", () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
        await page.getByPlaceholder('username').fill('Admin');
        await page.getByPlaceholder('password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL(/dashboard/);
        //.toHaveURL(/dashboard/) is optional verification
})

    /*getByRole('link', ....Find an element whose role is link
    { name: 'Admin' })....among those links, find the one named 'Admin'*/

test('Validate Admin menu item is visible on the dashboard', async ({page}) => {
    await expect(page.getByRole('link', {name: 'admin'})).toBeVisible();
})
test('Validate PIM menu item is visible on the dashboard', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'pim'})).toBeVisible();
    //getByRole() name matching is case-insensitive
})
test('Validate PIM menu item using get By Text', async ({ page }) => {
    await expect(page.getByText('pim', { exact: true})).toBeVisible();
    /*Fails: Because { exact: true } means Playwright looks for the exact text, 
    including capitalization.*/
})
test('Validate Leave menu item is visible on the dashboard', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Leave'})).toBeVisible();
})
test('Validate Time menu item is visible on the dashboard', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Time'})).toBeVisible();
})
test('Validate Recruitment menu item is visible on the dashboard', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Recruitment'})).toBeVisible();
})
test('Validate My Info menu item is visible on the dashboard', async ({ page }) => {
        await expect(page.getByRole('link', { name: 'My Info'})).toBeVisible();
})
test('Validate Performance menu item is visible on the dashboard', async ({page}) => {
    await expect(page.getByRole('link', {name: 'Performance'})).toBeVisible()
})
test('Validate Dashboard item menu on the dashboard', async ({ page }) => {
    await expect(page.getByRole('link', {name: 'Dashboard'})).toBeVisible()
})
test('Validate Directory item menu on the dashboard', async ({ page }) => {
    await expect(page.getByRole('link', {name: 'Directory'})).toBeVisible()
})
test('Validate Maintenance item menu on the dashboard', async ({ page }) => {
    await expect(page.getByRole('link', {name: 'Maintenance'})).toBeVisible()
})
test('Validate Claim item menu on the dashboard', async ({ page }) => {
    await expect(page.getByRole('link', {name: 'Claim'})).toBeVisible()
})
test('Validate Buzz item menu on the dashboard', async ({ page }) => {
    await expect(page.getByRole('link', {name: 'Buzz'})).toBeVisible()
})

});

        
        
    
