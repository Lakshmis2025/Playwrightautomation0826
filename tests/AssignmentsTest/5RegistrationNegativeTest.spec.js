/*test('Password mismatch', ...)
test('Password length is 1', ...)
test('Confirm password is empty', ...)*/

import { test, expect } from '@playwright/test';

test.describe("Password Validation Tests",() => {
test.beforeEach(async ({ page }) => {
await page.goto("https://parabank.parasoft.com/parabank/register.htm");
});

test('Password mismatch', async ({ page }) => {
//css selector
//await page.locator('input[id="customer.password"]').fill('password123');
//XPath locator
//await page.locator('//input[@id="customer.password"]').fill('password123');
//css attribute selector
await page.locator('[id="customer.password"]').fill('password123');
//css selector used with page.fill
//await page.fill('input[name="password"]','Password123');
await page.locator('[id="repeatedPassword"]').fill('Password456');
await page.locator('[value="Register"]').click();
await expect(page.locator('[id="repeatedPassword.errors"]')).toBeVisible();
});
test('Password length = 1', async({ page }) => {
    await page.locator('[id="customer.password"]').fill('P');
    await page.locator('[id="repeatedPassword"]').fill('P');
    await page.locator('[value="Register"]').click();
    await expect(page.locator('[id="customer.password.errors"]')).toBeVisible();
});
test('Confirm password empty', async({ page }) => {
    await page.locator('[id="customer.password"]').fill('Password123');
    await page.locator('[id="repeatedPassword"]').fill('');
    await page.locator('[value="Register"]').click();
    await expect(page.locator('[id="repeatedPassword.errors"]')).toBeVisible();

});
});
