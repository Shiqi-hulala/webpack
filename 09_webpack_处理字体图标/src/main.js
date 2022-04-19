// 1. yarn add jquery
// 2. public/index.html
// 3.入口处引入jQuery

import $ from 'jquery'

// 4.编写隔行变色
$('#myUl > li:odd').css('color', 'pink')
$('#myUl > li:even').css('color', 'skyblue')


// 5.引入css文件
import "./css/index.css"

// 6.引入less文件
import "./less/index.less"

// 7.手动引入一个图片文件
// webpack 眼里万物皆模块
import imgObj from './assets/jennie.jpg'
let theImg = document.createElement('img')
theImg.src = imgObj
document.body.appendChild(theImg)

// 8. 引入字体图标文件
import './assets/font/iconfont.css'
let theI = document.createElement('li')
theI.className = 'iconfont icon-jewelry'
document.body.appendChild(theI)