
const fs = require('fs')
const https = require('https')
const chalk = require('chalk')

const config = require('./config')


async function isExist(fileDir = 'images', options = {}) {
    const { isRoot } = options
    const dir = isRoot ? `./${fileDir}` : `${config.baseDir}/${fileDir}`
    try {
        await fs.promises.stat(dir)
    } catch (err) {
        await fs.promises.mkdir(dir) 
    }
}

async function downLoad(url, fileDir = 'images', fileAliasName) {
    https.get(url, async function(res){
        var imgData = ""
        let urlArr = url.split('/')
        let fileName = fileAliasName || urlArr[urlArr.length-1]
        let filePath =  (fileName.split('.').length>1)? `${config.baseDir}/${fileDir}/${fileName}` : `${config.baseDir}/${fileDir}/${fileName}.png`
		try {
			await fs.promises.stat(filePath)
			console.log(`file ${chalk.blue(fileName)} already exist`)
		} catch {
			res.setEncoding("binary")
			res.on("data", chunk => imgData+=chunk)
			res.on("end", function(){
				fs.writeFile(filePath, imgData, "binary", function(err){
					if (err) {
						console.log(`download ${chalk.red(fileName)} fail`, err)
					} else {
						console.log(`download ${chalk.green(fileName)} success`)
					}
				})
			})
		}
    })
}

module.exports = {
	isExist,
	downLoad
}
