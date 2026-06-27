import { Page, expect, Locator } from "@playwright/test"

export class RegisterPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly register: Locator;
    readonly flashMessage: Locator;
    readonly invalidUsername: Locator;
    readonly mismatchPassword: Locator;

    constructor(page: Page) {

        this.page = page;
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.confirmPassword = page.locator("#confirmPassword");
        this.register = page.getByRole('button', { name: 'Register' });
        this.flashMessage = page.locator("#flash");
        this.invalidUsername = page.locator("#flash");
        this.mismatchPassword = page.locator("#flash");

    }

    async gotoexpandTestingWebsite() {
        await this.page.goto(process.env.BASE_URL_3!);
    }
    async verifySuccessfullLoginWithValidDetails(username: string, password: string, confirmPassword: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.register.click();
    }
    async verifySuccessfullLoginExistedUsername(username: string, password: string, confirmPassword: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.register.click();
        await expect(this.flashMessage).toContainText('Please try again.');
    }
    async verifySuccessfullLoginWithInvalidUsername(username: string, password: string, confirmPassword: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.register.click();
        await expect(this.invalidUsername).toContainText('Invalid username. Usernames can only contain lowercase letters, numbers, and single hyphens, must be between 3 and 39 characters, and cannot start or end with a hyphen.');
    }
    async verifySuccessfullLoginMismatchedPassword(username: string, password: string, confirmPassword: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmPassword.fill(confirmPassword);
        await this.register.click();
        await expect(this.mismatchPassword).toContainText('Passwords do not match.');
    }

}