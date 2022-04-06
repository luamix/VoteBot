const puppeteer = require('puppeteer');

(async () => {
	const pollURL = 'https://poll.fm/11084850';
	const answerId = 'PDI_answer50827414';
     

	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.setViewport({
		width: 1280,
		height: 720,
		deviceScaleFactor: 3,
		isMobile: false,
		hasTouch: false,
		isLandscape: false
	});
	console.log('Page opened.');

	await page.goto(pollURL, { waitUntil: 'networkidle2' });
	console.log('Page loaded.');

	await page.waitForSelector('#' + answerId);
	await page.click('input#' + answerId);
	console.log('Answer chosen.');

	await page.evaluate(() => { document.querySelector('.vote-button').click(); });
	console.log('Voted.');


	console.log("Results page opened, closing browser.");
	var delayInMilliseconds = 500

	await browser.close();
})();
