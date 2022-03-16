(async () => {
  
const puppeteer = require('puppeteer');
const homedir = require('os').homedir();
  
let browser = await puppeteer.launch({
    args: ["--no-sandbox" ],
    userDataDir: `${homedir}/Library/Application Support/Google/Chrome/`,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
    
})
let page = await browser.newPage()
await page.goto("https://www.google.com")

})();
