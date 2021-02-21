const https = require('https')
const fs = require('fs')
const puppeteer = require('puppeteer')

const loads = require('./load')
const preLoad = require('./preLoad')
const utils = require('./utils')

const { login, simulateLogin } = preLoad
const { isExist } = utils

const bootstrap = async () => {
    await isExist('images', { isRoot: true })
	const browser = await puppeteer.launch({
        headless: true,
        devtools: true
    })
	const page = await browser.newPage()
    await simulateLogin(page)
    for (let load of Object.values(loads)) {
        await load(page)
    }
	await browser.close()
}

bootstrap()
