import { test } from "../../fixtures/pom-fixture";
import datatablemodule from "../../data/ui-data/datatablePage-module-data.json";

test.describe("---- Datatable functionality ----", {
    tag: ['@ALL'],
    annotation: {
        type: "checking positive and negative case",
        description: "https://datatables.net/examples/data_sources/ajax"
    }


}, () => {

    test.beforeEach("Datatable operation", async ({ datatablePageFix }) => {
        await datatablePageFix.gotoDatatableWebsite();
    })

    test("Checking all rows", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "Checking all rows all visible",
            description: "https://datatables.net/examples/data_sources/ajax"
        }

    }, async ({ datatablePageFix }) => {
        await datatablePageFix.verifyallrows();
    })

    test("Search by text", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "Checking rows are visible by searching text",
            description: "https://datatables.net/examples/data_sources/ajax"
        }

    }, async ({ datatablePageFix }) => {
        await datatablePageFix.searchByText(datatablemodule.searchText);
    })

    test("Sorting", {
        tag: ['@UI', '@UAT'],
        annotation: {
            type: "Checking rows are in descending order",
            description: "https://datatables.net/examples/data_sources/ajax"
        }

    }, async ({ datatablePageFix }) => {
        await datatablePageFix.sortColumn("Name", "descending");
    })

})