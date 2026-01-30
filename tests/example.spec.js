const { test, expect } = require('@playwright/test');

test('Pos_Fun_01 – Polite requestg', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('karuNaakaralaa mata podi udhavvak karanna puLuvandha?');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC01 Output:', result.replace('Sinhala', '').trim());
});


test('Pos_Fun_05 – Question form', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('oyaata kohomadha?');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('ඔයාට කොහොමද?', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC02 Output:', result.replace('Sinhala', '').trim());
});


test('Pos_Fun_08 – Simple sentence conversion', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('mama gedhara yanavaa.');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('මම ගෙදර යනවා.', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC03 Output:', result.replace('Sinhala', '').trim());
});


test('Neg_Fun_33 – Chat shorthand "u"', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('kohd u yanne?');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('කොහෙද උ යන්නෙ?', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC04 Output:', result.replace('Sinhala', '').trim());
});


test('Neg_Fun_32 – Chat shorthand "Thx"', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Input Your Singlish Text Here.')
        .fill('Thankx machan.');
    await page.waitForTimeout(3000);

    const outputContainer = page
        .locator('div')
        .filter({ hasText: /^Sinhala$/ })
        .locator('..')
        .first();

    await expect(outputContainer)
        .toContainText('ථන්කx මචන්.', { timeout: 15000 });

    const result = await outputContainer.innerText();
    console.log('TC05 Output:', result.replace('Sinhala', '').trim());
});