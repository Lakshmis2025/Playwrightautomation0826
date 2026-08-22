/*Login into the OrangeHRMS
Get the name of the user
Print the console area
Perform Logout*/

import{test, expect} from '@playwright/test';
test('Login,name of the user,Print,Logout',async ({page}) => {
    await page.goto('/');
    await page.getByPlaceholder('username').fill('Admin');
    await page.getByPlaceholder('password').fill('admin123');
    await page.getByRole('button', {name:'Login'}).click();

    const NameOfTheUser = await page.locator('.oxd-userdropdown-name').textContent();
    //page.locator('.class-name')..finds the element that displays the logged-in user's name.
    //.textContent();Gets the text inside that element.
    console.log(NameOfTheUser);
    await page.locator('.oxd-userdropdown-tab').click();
   await page.getByText('Logout', { exact: true }).click();
});


