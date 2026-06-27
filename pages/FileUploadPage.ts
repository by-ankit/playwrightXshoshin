import { Locator, Page, expect } from "@playwright/test";
import path from "path";

export class FileUpload {

    readonly page: Page;
    readonly fileInput: Locator;
    readonly uploadButton: Locator;
    readonly confirmUpload: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fileInput = page.locator("#fileInput");
        this.uploadButton = page.getByRole('button', { name: 'Upload' });
        this.confirmUpload = page.locator("#uploaded-files");
    }

    async gotoFileUploadWebsite() {
        await this.page.goto(process.env.BASE_URL_2!);
    }

    async uploadFile() {
        const filePath = path.join("__dirname", '../testdata/sample.txt');
        await this.fileInput.setInputFiles(filePath);
        await this.uploadButton.click();
        await expect(this.confirmUpload).toBeVisible();
        await expect(this.confirmUpload).toContainText('sample.txt');
    }

    async uploadMultipleFileAtATime() {
        const filePath = [path.join("__dirname", '../testdata/sample.txt'),
        path.join("__dirname", '../testdata/sample.pdf'),
        path.join("__dirname", '../testdata/sample.jpg')];

        await this.fileInput.setInputFiles(filePath);
        await this.uploadButton.click();
        await expect(this.confirmUpload).toBeVisible();
    }

    async uploadMultipleFileOneByOne() {
        const files = [
            'sample.txt',
            'sample.jpg',
            'sample.pdf'
        ];

        for (const file of files) {
            const filePath = path.join("__dirname", "../testdata/", file);
            await this.fileInput.setInputFiles(filePath);
            await this.uploadButton.click();
            await expect(this.confirmUpload).toBeVisible();
        }
    }
}