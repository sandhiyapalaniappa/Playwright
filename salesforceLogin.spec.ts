import {test, chromium} from "@playwright/test"
    test('Login to salesforce',async ({page})=> {
    
        await page.goto("https://login.salesforce.com/")
        await page.locator('[name="username"]').fill('dilipkumar.rajendran@testleaf.com')
        await page.locator('[id="Login"]').click()
        await page.locator('[id="password"]').fill('Testleaf@2025')
        await page.locator('[id="Login"]').click()
        let pageTitle = await page.title()
        console.log(pageTitle)
        let pageUrl = page.url()
        console.log(pageUrl)
    })
