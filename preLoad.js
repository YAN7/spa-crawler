const config = require('./config')

async function login(page) {
	await page.goto(`${config.baseUrl}/pages/public/login`)
	await page.waitFor('.tab-item.x-c')
	const pwdLoginBtn = await page.$$('.tab-item.x-c')
	await pwdLoginBtn[1].click()
	const inputItems = await page.$$('.login-box.y-f .input-item')
	const accountBtn = await inputItems[2].$('.inp input')
	await accountBtn.type('15521188906')
	const pwdBtn = await inputItems[3].$('.inp input')
	await pwdBtn.type('123123')
	await page.waitFor(1000)
	const loginBtn = await page.$('.login-btn')
	await loginBtn.click()
}

async function simulateLogin(page) {
	await page.goto(config.baseUrl)
	await page.waitFor(1000)
	await page.evaluate(() => {
		localStorage.setItem('token', 'df49b381-ed3b-4377-91b7-eb4399d8fdc2')
	})
	await page.goto(config.baseUrl)
}

module.exports = {
	login,
	simulateLogin,
}
