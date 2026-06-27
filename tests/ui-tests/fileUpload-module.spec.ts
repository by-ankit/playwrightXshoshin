import { test } from "../../fixtures/pom-fixture";

test.describe("---- File upload functionality ----", {
    tag: ['@ALL'],
    annotation: {
        type: "checking positive and negative case",
        description: "https://practice.expandtesting.com/upload"
    }

}, () => {

    test.beforeEach("opening the browser", async ({ fileUploadFix }) => {
        await fileUploadFix.gotoFileUploadWebsite();
    })

    test("Checking single file upload", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "verifying with single fileupload",
            description: "https://practice.expandtesting.com/upload"
        }

    }, async ({ fileUploadFix }) => {
        await fileUploadFix.uploadFile();
    })

    test.skip("Checking multiple files upload", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "verifying with multiple fileupload",
            description: "https://practice.expandtesting.com/upload"
        }

    }, async ({ fileUploadFix }) => {
        await fileUploadFix.uploadMultipleFileAtATime();
        await fileUploadFix.uploadMultipleFileOneByOne();
    })

})