import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const BASE_URL = 'https://parabank.parasoft.com/parabank/';

function generateuser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return{
    firstName,
    lastName,
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipcode: faker.location.zipCode(),
    phonenumber: faker.phone.number({style: 'national'}),
    ssn:faker.string.numeric(9),	
    username:`${faker.string.alphanumeric(3)}_${firstName}_${faker.string.alphanumeric(3)}`
       .toLowerCase()
       .replace(/[^a-z0-9_]/g, ''),
    password: faker.string.alphanumeric(8),
  };
}

test('Register 5 users sequentially', async ({ page }) => {
  test.setTimeout(180000);
  
  const users = Array.from({ length: 5 }, () => generateuser());
  
  for (const user of users) {
    await page.goto(BASE_URL);
    await page.getByRole('link',{name: 'register'}).click();
    await expect(page).toHaveURL(`${BASE_URL}register.htm`);

    await page.locator('#customer\\.firstName').fill(user.firstName);
    await page.locator('#customer\\.lastName').fill(user.lastName);
    await page.locator('#customer\\.address\\.street').fill(user.street);
    await page.locator('#customer\\.address\\.city').fill(user.city);
    await page.locator('#customer\\.address\\.state').fill(user.state);
    await page.locator('#customer\\.address\\.zipCode').fill(user.zipcode);
    await page.locator('#customer\\.phoneNumber').fill(user.phonenumber);
    await page.locator('#customer\\.ssn').fill(user.ssn);
    await page.locator('#customer\\.username').fill(user.username);
    await page.locator('#customer\\.password').fill(user.password);
    await page.locator('#repeatedPassword').fill(user.password);
    
    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.getByText(`Welcome ${user.username}`)).toBeVisible();
    await page.getByRole('link', { name: 'Log Out' }).click();
  }
});
