/*
Crud Operations on DemoQA Web Tables Using Playwright
*/
import { test, expect } from '@playwright/test'

test('Create-Add a new employee', async ({ page })=> {
    await page.goto('https://demoqa.com/webtables');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Sam');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Smith');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('Smith@gmail.com');
  await page.getByRole('textbox', { name: 'Age' }).fill('20');
  await page.getByRole('textbox', { name: 'Salary' }).fill('12000');
  await page.getByRole('textbox', { name: 'Department' }).fill('QA');
  await page.getByRole('button', { name: 'Submit' }).click();
  
});

test('Read-Search for an employee', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  await page.getByRole('textbox', { name: 'Type to search' }).click();
  await page.getByRole('textbox', { name: 'Type to search' }).fill('Cierra');
  await page.getByRole('textbox', { name: 'Type to search' }).press('Enter');
});

test('Update-Edit an employee salary', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  await page.locator('#edit-record-1 > svg > path').click();
  await page.getByRole('textbox', { name: 'Salary' }).fill('12000');
  await page.getByRole('button', { name: 'Submit' }).click();
  
});

test('Delete-Remove an employee', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  await page.locator('#delete-record-1 > svg > path').click();
  
});