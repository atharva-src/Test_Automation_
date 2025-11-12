const{ test,expect} = require ('@playwright/test')

test("Test the webpage", async ({ page })=>{

    await page.goto('')

    await page.locator('').click()

    
}) 