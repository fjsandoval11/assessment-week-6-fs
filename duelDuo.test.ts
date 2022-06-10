
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw button displays id = "choices"',async()=> {
    const drawBtn = await driver.findElement(By.id('draw'))

    await driver.findElement(By.xpath(`//body/button/draw`)).click
    
    await driver.sleep(4000)
    expect(By.xpath('//body/section/div/id="choices"')).toBeTruthy
    
})

// test("some string describing the test", async () => {
//     // create variables, select element with devtools
//     // automate button clicks with .click() at the end
//     // see if an element is displayed by using .isDisplayed()

//     expect(/* something */).toBeTruthy();
//     await driver.sleep(5000);
// })