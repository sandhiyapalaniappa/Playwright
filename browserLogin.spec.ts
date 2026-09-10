
import {test, chromium, webkit } from "@playwright/test"
//Load Red Bus in an Edge browser instance and verify the page title and URL.

test('launch a browser in Edge',async()=>{
    const browserInstance = await chromium.launch({ headless: false, channel: "msedge" });
    const browserContext = await browserInstance.newContext();
    const page = await browserContext.newPage();

    await page.goto("https://www.redbus.in");
    await page.waitForTimeout(1000)

    console.log("Page Title :", await page.title());
    console.log("Page URL :", page.url());

    //Load Flipkart in a Webkit browser instance and verify the page title and URL.


    const browserInstanceWeb = await webkit.launch({ headless: false})
    const browserContextWeb = await browserInstanceWeb.newContext();
    const pageWeb = await browserContextWeb.newPage();

    await pageWeb.goto("https://www.flipkart.com");
    await pageWeb.waitForTimeout(1000)

    console.log("Page Title :", await pageWeb.title());
    console.log("Page URL :", pageWeb.url());

})
