import { test, expect } from '@playwright/test';

test.describe('Orange HRM- adminJobModule', () => {      

test('add, edit, and delete a job title', async ({ page }) => {

    const user = {
      jobTitle: `QA Tester ${Date.now()}`, 
      description: 'Test Software features',
      updatedDescription:'Test webapplications with Playwright',
    };
    const row = page.getByRole('row').filter({
  has: page.getByRole('cell', { name: user.jobTitle, exact: true }),
});

//Login
await test.step('Login', async() => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

//Navigate to Job -> Job Title
await test.step('Navigate to Job', async () => {
    await page.getByRole('link', { name: 'Admin', exact : true }).click();
    await page.getByText('Job', { exact : true }).click();
    await page.getByRole('menuitem', { name: 'Job Titles'}).click();
    await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
});

//Add Job Title, Job description
await test.step('Add', async () => {  
    await page.getByText('Add', { exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Add Job Title' })).toBeVisible();
});

//Add Job Title, Job description
await test.step('Add Job Title, Job description', async () => {
    await page
    .locator('.oxd-input-group')
    .filter({ hasText: 'Job Title' })
    .locator('input').fill(user.jobTitle);

    await page.getByPlaceholder('Type description here').fill(user.description);

    await page.getByRole('button', { name : 'Save' , exact : true } ).click();

    await expect(page.getByText('Successfully Saved')).toBeVisible();

    await expect(page).toHaveURL
    ('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');

    await expect(row).toBeVisible();
    await expect(row).toContainText(user.description);
});

await test.step('update row', async () => {
    await row.locator('button:has(.oxd-icon.bi-pencil-fill)').click();
    await expect(page.getByPlaceholder('Type description here')).toHaveValue(user.description);
    await page.getByPlaceholder('Type description here').fill(user.updatedDescription);
    await page.getByRole('button', { name : 'Save' , exact : true } ).click();
    await expect(page.getByText('Successfully Updated')).toBeVisible();
    await expect(page)
    .toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
    await expect(row).toContainText(user.updatedDescription);
    
});

await test.step('Delete', async () => {    
    await row.locator('button:has(.bi-trash)').click();
    await page.getByRole('button', { name:  "Yes, Delete" }).click();
    await expect(row).toHaveCount(0);
});

});
});










 
    