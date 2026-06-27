import { test } from "../../fixtures/pom-fixture";
import multistepdata from "../../data/ui-data/multistepformPage-module-data.json";

test.describe("---- Multistep from functionality ----", {
    tag: ['@ALL'],
    annotation: {
        type: "checking positive and negative case",
        description: "https://multistepform.netlify.app/"
    }

}, () => {
    test("Mutistep form filling",
        {
            tag: ['@UI', '@UAT'],
            annotation: {
                type: "filling complete details in multistep form",
                description: "https://multistepform.netlify.app/"
            }

        }, async ({ multistepFormFix }) => {
            await multistepFormFix.gotoMultistepFormWebsite();
            await multistepFormFix.fillBasicDetailsInFormfirstPage(multistepdata.firstname, multistepdata.lastname, multistepdata.email);
            await multistepFormFix.fillBasicDetailsInFormSecondage(multistepdata.occupaation, multistepdata.city, multistepdata.biodata);

        })

})