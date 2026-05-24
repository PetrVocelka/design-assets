import { expect, test } from '@playwright/test';

test.describe('XS icon sizing in flex layout', () => {
  test('xs preset renders ~12px bounding box', async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('[data-testid="xs-icon"] svg');

    const box = await page.locator('[data-testid="xs-icon"] svg').boundingBox();
    expect(box).not.toBeNull();
    expect(box!.width).toBeGreaterThanOrEqual(11);
    expect(box!.width).toBeLessThanOrEqual(13);
    expect(box!.height).toBeGreaterThanOrEqual(11);
    expect(box!.height).toBeLessThanOrEqual(13);
  });
});
