import { test } from "../../fixtures/pom-fixture";
import registerPageModule from "../../data/ui-data/registerPage-module-data.json";

test.describe("---- New Registration functionality ----", {
    tag: ['@ALL'],
    annotation: {
        type: "checking positive and negative case",
        description: "https://practice.expandtesting.com/upload"
    }

}, () => {


    test.beforeEach("Opening the browser", async ({ registerPageFix }) => {
        await registerPageFix.gotoexpandTestingWebsite();
    })

    test("Verifying successfully login with valid login data", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "verifying with valid username and valid password",
            description: "https://practice.expandtesting.com/register"
        }

    }, async ({ registerPageFix }) => {
        await registerPageFix.verifySuccessfullLoginWithValidDetails(registerPageModule.VALID_USER_NAME, registerPageModule.VALID_PASSWORD, registerPageModule.CONFIRM_PASSWORD);
    })

    test("Verifying successfully login with already registered username", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "verifying with already existed username",
            description: "https://practice.expandtesting.com/register"
        }

    }, async ({ registerPageFix }) => {
        await registerPageFix.verifySuccessfullLoginExistedUsername(registerPageModule.VALID_USER_NAME, registerPageModule.VALID_PASSWORD, registerPageModule.CONFIRM_PASSWORD);
    })

    test("Verifying successfully login with invalid username", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "verifying with invalid username and valid password",
            description: "https://practice.expandtesting.com/register"
        }

    }, async ({ registerPageFix }) => {
        await registerPageFix.verifySuccessfullLoginWithInvalidUsername(registerPageModule.INVALID_EMAIL, registerPageModule.VALID_PASSWORD, registerPageModule.CONFIRM_PASSWORD);
    })

    test("Verifying successfully login with mismatched password", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "verifying with valid username and invalid password",
            description: "https://practice.expandtesting.com/register"
        }

    }, async ({ registerPageFix }) => {
        await registerPageFix.verifySuccessfullLoginMismatchedPassword(registerPageModule.VALID_USER_NAME, registerPageModule.VALID_PASSWORD, registerPageModule.MISMATCH_PASSWORD);
    })

})
