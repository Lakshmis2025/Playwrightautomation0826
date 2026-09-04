/*Write a Playwright test to open the ParaBank registration page 
and fill the registration form using Faker-generated test data.*/

const { test, expect } = require('@playwright/test');
const { faker } = require('@faker-js/faker');

const Base_url = "https://parabank.parasoft.com/parabank/";

function generateUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
        firstName,
        lastName,
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state({ abbreviated: true }),
        zipCode: faker.location.zipCode('#####'),
        phone: faker.phone.number(),
        ssn: faker.string.numeric(9),

        username:
            `${firstName}_${lastName}_${faker.string.alphanumeric(3)}`
                .toLowerCase()
                .replace(/[^a-z0-9_]/g, ''),

        password: `${faker.string.alphanumeric(8)}`,
    };
}

test('Verify Register Link Opens the Registration Page', async ({ page }) => {
    await page.goto(Base_url);
    await page.waitForTimeout(10000);
    await page.locator('[href="register.htm"]').click();
    await expect(page).toHaveURL(`${Base_url}register.htm`);
  

});


test('Fill the Registration Page By Using Faker', async ({ page }) => {
    const user = generateUser();
    await page.goto(Base_url);
    await page.locator('[href="register.htm"]').click();
    await expect(page).toHaveURL(`${Base_url}register.htm`);

    await page.locator('[id="customer.firstName"]').fill(user.firstName);
await page.locator('[id="customer.lastName"]').fill(user.lastName);
await page.locator('[id="customer.address.street"]').fill(user.address);
await page.locator('[id="customer.address.city"]').fill(user.city);
await page.locator('[id="customer.address.state"]').fill(user.state);
await page.locator('[id="customer.address.zipCode"]').fill(user.zipCode);
await page.locator('[id="customer.phoneNumber"]').fill(user.phone);
await page.locator('[id="customer.ssn"]').fill(user.ssn);
await page.locator('[id="customer.username"]').fill(user.username);
await page.locator('[id="customer.password"]').fill(user.password);
await page.locator('[id="repeatedPassword"]').fill(user.password);
await page.waitForTimeout(10000);
}
);



