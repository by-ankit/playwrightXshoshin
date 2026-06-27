import { test } from "../../fixtures/pom-fixture";
import loginModuledata from "../../data/ui-data/loginPage-module-data.json";

test.describe("---- Login functionality ----", {
    tag: ['@ALL'],
    annotation: {
        type: "checking positive and negative case",
        description: "https://the-internet.herokuapp.com/login"
    }


}, () => {

    test.beforeEach("Opening the browser", async ({ loginPageFix }) => {
        await loginPageFix.gotoHerokuWebsite();
    })

    test("Verifying login module with valid details", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "verifying with valid username and valid password",
            description: "https://the-internet.herokuapp.com/login"
        }

    }, async ({ loginPageFix }) => {
        await loginPageFix.verifyingLogin(loginModuledata.VALID_USER_NAME, loginModuledata.VALID_PASSWORD);
        await loginPageFix.verifyingSuccessfullyLogin();
        await loginPageFix.verifyingSuccessfullyLogin();
        await loginPageFix.verifyingSuccessfullyLogout();
    })

    test("Verifying login module with invalid partial details", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "verifying with invalid username and valid password",
            description: "https://the-internet.herokuapp.com/login"
        }

    }, async ({ loginPageFix }) => {
        await loginPageFix.verifyingLogin(loginModuledata.INVALID_USER_NAME, loginModuledata.VALID_PASSWORD);
        await loginPageFix.verifyingflashMessage();
    })

    test("Verifying login module with invalid complete details", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "verifying with invalid username and invalid password",
            description: "https://the-internet.herokuapp.com/login"
        }

    }, async ({ loginPageFix }) => {
        await loginPageFix.verifyingLogin(loginModuledata.INVALID_USER_NAME, loginModuledata.INVALID_PASSWORD);
        await loginPageFix.verifyingflashMessage();
    })

})