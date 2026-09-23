//Assignment 1: Javascript Alert Handling
import { test, expect } from '@playwright/test';

test('Accept JavaScript Alert', async ({ page }) => {
    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am a JS Alert');
        await dialog.accept();
    });

    await page
        .getByRole('button', { name: 'Click for JS Alert' })
        .click();  
          
    const result = page.locator('#result');
    await expect(result)
        .toHaveText('You successfully clicked an alert');
});
    
//Open page → Register listener → Click button → Accept alert → Verify result    

