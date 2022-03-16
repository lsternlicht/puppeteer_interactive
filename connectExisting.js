// after running start_chrome_and_connect.sh
(async () => {
  const puppeteer = require("puppeteer");
  const browser = await puppeteer.connect({
    browserURL: "http://127.0.0.1:9222",
  });
  let page = await browser.newPage()
  await page.goto("https://www.google.com") 
  global.browser = browser;
  global.page = page;
})();
