import { chromium, test } from "@playwright/test";

test("To create leads using CSS", async ({page}) => {
 await page.goto("https://leaftaps.com/opentaps/control/main")
 //Login to leaftaps
 await page.locator('[id="username"]').fill('democsr2')
 await page.locator('#password').fill('crmsfa')
 await page.locator('.decorativeSubmit').click()
 await page.locator('text=CRM/SFA').click()
 //create leads
 await page.locator('[href="/crmsfa/control/leadsMain"]').click()
 await page.locator('[href="/crmsfa/control/createLeadForm"]').click()
 await page.waitForTimeout(5000);
 //CSS selectors to locate all web elements
 await page.locator('#createLeadForm_companyName').fill('Testleaf')
 await page.locator('#createLeadForm_firstName').fill('Sandhiya')
 await page.locator('#createLeadForm_lastName').fill('QA');
 await page.locator('#createLeadForm_personalTitle').fill('Mrs');
 await page.locator('#createLeadForm_generalProfTitle').fill('QA Engineer');
 await page.locator('#createLeadForm_annualRevenue').fill('500000');
 await page.locator('#createLeadForm_departmentName').fill('Testing');
 //Locate Source dropdown using CSS selector
    const sourceDropdown = page.locator('#createLeadForm_dataSourceId');
 //Iterate through all Source dropdown options
    const selectOptions = sourceDropdown.locator('selectoption');

    const count = await selectOptions.count();

    for (let i = 0; i < count; i++) {
        console.log(await selectOptions.nth(i).textContent());
    }
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('7598681529');
    await page.locator('input[value="Create Lead"]').click();
})
