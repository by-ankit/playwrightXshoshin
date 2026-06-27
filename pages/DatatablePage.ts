import { Page, Locator, expect } from "@playwright/test";

export class DatatablePage {

    readonly page: Page;
    readonly alltablerows: Locator;
    readonly searchBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.alltablerows = page.locator("#example tbody tr").first();
        this.searchBox = page.getByRole('searchbox', { name: 'Search:' });

    }

    async gotoDatatableWebsite() {
        await this.page.goto(process.env.BASE_URL_4!);
    }

    async verifyallrows() {
        await expect(this.alltablerows).toBeVisible();
    }

    async searchByText(searchtext: string) {
        await this.searchFilter(searchtext);
        await this.waitForTableProcessingToComplete();
    }


    async searchFilter(searchText: string) {
        await this.searchBox.clear();
        await this.searchBox.fill(searchText);
    }

    async clearFiler() {
        await this.searchBox.clear();
        await this.waitForTableProcessingToComplete();
    }

    async waitForTableProcessingToComplete() {
        await this.page.waitForTimeout(300);
        await expect(this.alltablerows.first()).toBeVisible();
    }

   async sortColumn(columnName: string, direction: 'ascending' | 'descending') {

    const column = this.page.locator("#example thead th", { hasText: columnName }).first();
    for (let i = 0; i < 3; i++) {
        const current = await column.getAttribute('aria-sort');
        if (current === direction) {
            return;
        }
        await column.highlight();
        await this.page.screenshot({ path: `test-results/before-${i}.png` });
        await column.click();
        await this.page.screenshot({ path: `test-results/after-${i}.png` });
        await this.waitForTableProcessingToComplete();
    }

    await expect(column).toHaveAttribute('aria-sort', direction);
}

}