import { test, expect } from '@playwright/test';

test.describe('OrangeHRM-employment status', () => {
    test('CRUD operations-employment status', async ({ page }) => {
        test.setTimeout(60000);
        
        const timestamp = Date.now();

        const user = {
            name: `QA Contract ${timestamp}`,
            updatedName: `QA Permanent ${timestamp}`,
        };   
     
        const row = page.getByRole('row').filter({ 
            has: page.getByRole('cell', { 
                name: user.name, 
                exact: true
            }) 
        });

        const updatedRow = page.getByRole('row').filter({
            has: page.getByRole('cell', { 
                name: user.updatedName, 
                exact: true 
            })
        });

        const nameInput = page.locator('form').getByRole('textbox');

        const dialog = page.getByRole('dialog'); 
    
        // Login

        await test.step('Login as Admin', async () => {
            await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
            await page.getByPlaceholder('Username').fill('Admin');
            await page.getByPlaceholder('Password').fill('admin123');
            await page.getByRole('button', { name: 'Login' }).click();
            await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
        });   
          
       // Navigate to Admin -> Job -> Employment Status

       await test.step('Navigate to Employment Status', async () => {
           await page.getByRole('link', { name: 'Admin' }).click();
           await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
           await page.getByText('Job', { exact : true }).click();
           await page.getByRole('menuitem', { name: 'Employment Status', exact : true }).click();
           await expect(page.getByRole('heading', { name: 'Employment Status', exact : true })).toBeVisible();
       });

      // Add

      await test.step('Add', async () => { 
          await page.getByRole('button', { name: /Add/ }).click();
          await expect(page.getByRole('heading', { name: 'Add Employment Status' })).toBeVisible();
          await nameInput.fill(user.name);
          await page.getByRole('button', { name : 'Save' , exact : true } ).click();
          await expect(row).toBeVisible({ timeout: 15000 });
      });               
          
      // Update

      await test.step('Update', async () => {
          await row.locator('button:has(i.bi-pencil-fill)').click();
          await expect(page.getByRole('heading', { name: 'Edit Employment Status' })).toBeVisible();
          await expect(nameInput).toHaveValue(user.name);
          await nameInput.fill(user.updatedName);
          await expect(nameInput).toHaveValue(user.updatedName);
          await page.getByRole('button', { name : 'Save' , exact : true } ).click();
          await expect(updatedRow).toBeVisible({ timeout: 15000 });
      });
   
      // Delete
                      
      await test.step('Delete', async () => {
          await updatedRow.locator('button:has(i.bi-trash)').click();
          await dialog.getByRole('button', { name: 'Yes, Delete', }).click();
          await expect(dialog).toBeHidden();
          await expect(updatedRow).toHaveCount(0);
      });

    });
});



            

            
            
       