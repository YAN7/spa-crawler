# SPA项目 爬虫

主要使用[puppeteer](https://zhaoqize.github.io/puppeteer-api-zh_CN/)实现的一个适用于SPA项目的爬虫

### 项目来源

在做一个项目的过程中使用了一个开源前端框架,该开源框架的使用到的图片都是从服务器返回的,为了防止图片万一被删掉,所以需要把图片爬取到本地.

### 使用
```
git clone https://github.com/YAN7/spa-crawler.git
npm install
node index.js
```

### 使用效果

![使用效果](https://i.bmp.ovh/imgs/2021/02/1aa60061991dcb45.png)

### 主要功能

1. 通过跳转到到登陆页面并写入账号密码来实现登陆功能,
2. 通过直接向页面的localStorage写入token来模拟登陆功能,
3. 自动检测写入的文件夹是否存在,不存在则创建,
4. 自动检测爬取的图片是否已存在,存在则跳过,
5. 写入新的爬取模块只需要在load.js中写入新的函数,则在启动的时候会自动执行.
