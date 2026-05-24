import { expect, test } from '@playwright/test';

test.describe('currentColor via external <use href>', () => {
  test('external Icon inherits text-blue-600; img does not', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="external-icon"] svg');

    const externalSvg = page.locator('[data-testid="external-icon"] svg');
    await expect(externalSvg).toHaveAttribute('viewBox', '0 0 24 24');
    await expect(externalSvg.locator('use')).toHaveAttribute('href', /#asset$/);

    const externalColor = await externalSvg.evaluate((el) =>
      getComputedStyle(el).color,
    );
    expect(externalColor).toMatch(/rgb\(37,\s*99,\s*235\)/);

    // The <img> element inherits CSS `color`, but the SVG document inside renders
    // with its own (default black) stroke — visual output differs from external <use>.
    const externalShot = await page
      .locator('[data-testid="external-icon"]')
      .screenshot();
    const imgShot = await page
      .locator('[data-testid="img-icon"]')
      .screenshot();

    expect(Buffer.from(externalShot).equals(Buffer.from(imgShot))).toBe(false);
  });
});
