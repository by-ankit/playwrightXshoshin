import { Locator, Page, expect } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly flashMessage: Locator;
    readonly secureAreaHeading: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button[type="submit"]');
        this.flashMessage = page.locator('#flash');
        this.secureAreaHeading = page.locator('h2');
        this.logoutButton = page.locator('a.button');
    }

    async gotoHerokuWebsite() {
        await this.page.goto(process.env.BASE_URL!);
        //await this.page.goto("https://the-internet.herokuapp.com/login");
    }

    async verifyingLogin(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifyingSuccessfullyLogin() {
        await expect(this.flashMessage).toBeVisible();
        await expect(this.secureAreaHeading).toBeVisible();
    }

    async verifyingflashMessage() {
        await expect(this.flashMessage).toBeVisible();
    }

    async verifyingSuccessfullyLogout() {
        await this.logoutButton.click();
    }
}