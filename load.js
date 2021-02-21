const utils = require('./utils')

const { downLoad, isExist } = utils

module.exports = {
	async loadBanner(page) {
		const imgs = await page.$$eval('uni-swiper-item.carousel-item ', (items) => items.map((item) => item.querySelector('uni-image.swiper-image img').src))
		await isExist('banner')
		imgs.map((img, index) => downLoad(img, 'banner', `banner${index}`))
	},
	async loadMenuItem(page) {
		const menuItems = await page.$('uni-swiper-item.menu-swiper-item')
		const imgs = await menuItems.$$eval('.menu-tab-box img', (items) => items.map((item) => item.src))
		await isExist('menuItem')
		imgs.map((img, index) => downLoad(img, 'menuItem', `menuItem${index}`))
	},
	async loadOrderItem(page) {
		const tabBars = await page.$$('.tabbar-item')
		await tabBars[3].click()
		await page.waitFor('.order-item.y-f .item-box img')
		const orderItems = await page.$('.order-box.x-f')
		const orderImg = await orderItems.$$eval('.order-item.y-f .item-box img', (imgs) => imgs.map((img) => img.src))
		await page.waitFor('.order-item.y-f .item-box img')
		await page.waitFor(1000)
		const allOrderImg = await page.$eval('.all-order .item-box img', (allOrder) => allOrder.src)
		await isExist('orderItem')
		orderImg.concat(allOrderImg).map((img, index) => downLoad(img, 'orderItem', `orderItem${index}`))
	},
	async loadUserNav(page) {
		const tabBars = await page.$$('.tabbar-item')
		await tabBars[3].click()
		await page.waitFor('.menu-item .item-img img')
		await page.waitFor(1000)
		const userNavList = await page.$('.menu-list-box')
		const userNavImgs = await userNavList.$$eval('.menu-item .item-img img', (imgs) => imgs.map((img) => img.src))
		await isExist('userNav')
		userNavImgs.map((img, index) => downLoad(img, 'userNav', `userNav${index}`))
	},
}
