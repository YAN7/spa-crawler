const minimist = require('minimist')

const argv = minimist(process.argv)

module.exports = {
	baseDir: './images',
	// 隐私相关,通过命令行参数注入
	baseUrl: argv.url
}