// 1. yarn add jquery
// 2. public/index.html
// 3.入口处引入jQuery

import $ from 'jquery'

// 编写隔行变色
$('#myUl > li:odd').css('color', 'pink')
$('#myUl > li:even').css('color', 'skyblue')