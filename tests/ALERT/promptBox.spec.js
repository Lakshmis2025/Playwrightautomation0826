 // Assignmentt 3: Box (Entering Text);

import { test, expect } from '@playwright/test';

test('Enter Text in JavaScript Prompt', async ({ page }) => {
    await page.goto(
        'https://the-internet.herokuapp.com/javascript_alerts'
    );

    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');
        await dialog.accept('abc');
    });

    await page
        .getByRole('button', { name: 'Click for JS Prompt' })
        .click();     
     
    const result = page.locator('#result');
    
    await expect(result)
        .toHaveText('You entered: abc');      
});


    
       

