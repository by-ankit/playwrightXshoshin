import { Page, expect, Locator } from "@playwright/test"

export class MultistepFormPage {

    readonly page: Page;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly email: Locator;
    readonly continueButton: Locator;
    readonly occupaation: Locator;
    readonly city: Locator;
    readonly biodata: Locator;
    readonly backButton: Locator;
    readonly confirmAndContinueButton: Locator;
    readonly submissionMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstname = page.locator("(//input[@type='text'])[1]");
        this.lastname = page.locator("(//input[@type='text'])[2]");
        this.email = page.locator("(//input[@type='text'])[3]");
        this.continueButton = page.getByRole('button', { name: /^Continue$/i });
        this.backButton = page.getByRole('button', { name: /^Back$/i });
        this.occupaation = page.locator("(//input[@type='text'])[1]");
        this.city = page.locator("(//input[@type='text'])[2]");
        this.biodata = page.locator("(//input[@type='text'])[3]");
        this.confirmAndContinueButton = page.locator("//span[text()='Confirm & Continue ']");
        this.submissionMessage = page.locator("//h1[contains(text(),'Submission')]");
    }

    async gotoMultistepFormWebsite() {
        await this.page.goto(process.env.BASE_URL_5!);
    }

    async fillBasicDetailsInFormfirstPage(firstname: string, lastname: string, email: string) {
        await this.firstname.fill(firstname);
        await expect(this.firstname).toHaveValue(firstname);
        await this.lastname.fill(lastname);
        await expect(this.lastname).toHaveValue(lastname);
        await this.email.fill(email);
        await expect(this.email).toHaveValue(email);
        await this.continueButton.click();
    }

    async fillBasicDetailsInFormSecondage(occupaation: string, city: string, biodata: string) {
        await this.occupaation.fill(occupaation);
        await expect(this.occupaation).toHaveValue(occupaation);
        await this.city.fill(city);
        await expect(this.city).toHaveValue(city);
        await this.biodata.fill(biodata);
        await expect(this.biodata).toHaveValue(biodata);
        await this.continueButton.click();
        await this.confirmAndContinueButton.click();
        await expect(this.submissionMessage).toBeVisible();
    }
}