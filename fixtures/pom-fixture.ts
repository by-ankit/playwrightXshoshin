import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import {FileUpload} from "../pages/FileUploadPage";
import {RegisterPage} from "../pages/RegisterPage";
import {DatatablePage} from "../pages/DatatablePage";
import { MultistepFormPage } from "../pages/MultistepFormPage";


type PomFixtureType = {
    loginPageFix : LoginPage;
    fileUploadFix : FileUpload;
    registerPageFix : RegisterPage;
    datatablePageFix : DatatablePage;
    multistepFormFix: MultistepFormPage;
}

export const test = baseTest.extend<PomFixtureType> ( {

    loginPageFix :async ({page},use) => {
        const loginPageObj = new LoginPage(page);
       
        await use(loginPageObj);
    },

    fileUploadFix : async ({page},use) => {
        const fileUploadObj = new FileUpload(page);
        await use(fileUploadObj);
    },

    registerPageFix : async ({page},use) => {
        const registerPageObj = new RegisterPage(page);
        await use(registerPageObj);

    },

    datatablePageFix : async ({page},use) => {
        const datatableobj = new DatatablePage(page);
        await use(datatableobj);
    },

    multistepFormFix : async({page},use)=> {
        const multistepFromObj = new MultistepFormPage(page);
        await use(multistepFromObj);
    }
})

export {expect} from "@playwright/test";
