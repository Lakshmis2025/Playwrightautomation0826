//Assignment 2: Confirm Box (Dismiss/Cancelling)

import { test, expect } from '@playwright/test';

test('Dismiss JavaScript Confirm Dialog', async ({ page }) => {
    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.dismiss();
    });

    await page
        .getByRole('button', { name: 'Click for JS Confirm' })
        .click();       
     
    const result = page.locator('#result');
    await expect(result)
        .toHaveText('You clicked: Cancel');
});
   /* Open page
→ Register dialog listener
→ Verify confirm type and message
→ Dismiss the dialog
→ Verify “You clicked: Cancel”*/
   