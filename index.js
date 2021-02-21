const puppeteer = require('puppeteer')

const loads = require('./load')
const preLoad = require('./preLoad')
const utils = require('./utils')

// eslint-disable-next-line no-unused-vars
const { login, simulateLogin } = preLoad
const { isExist } = utils

const bootstrap = async () => {
	await isExist('images', { isRoot: true })
	const browser = await puppeteer.launch({
		headless: true,
		devtools: true,
	})
	const page = await browser.newPage()
	await simulateLogin(page)
	// eslint-disable-next-line no-restricted-syntax
	for (const load of Object.values(loads)) {
		// eslint-disable-next-line no-await-in-loop
		await load(page)
	}
	await browser.close()
}

bootstrap()
