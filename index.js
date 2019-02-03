const Test = require('./lib')
const indexOf = new Test("本教程:www.w3big.com","w3big","com")
console.log(indexOf)
//indexof('อักขระที่ต้องการค้นหา') คือค่าเป็น index ของอักขระ
console.log(indexOf.string.indexOf('程'))
//indexof('string ที่ต้องการค้นหา) คืนค่าเป็น index ของอักขระตัวแรกของ string
console.log(indexOf.string.indexOf('本教程'))
//indexof('อักขระ','index ที่ต้องการเริ่มค้นหา') คืนค่าเป็น index ถ้าเจอ และ -1 ถ้าไม่เจอ
console.log(indexOf.string.indexOf('程',0))
//indexof('string ที่ต้องการค้นหา','index ที่ต้องการเริ่มค้นหา') (ค้นหาแค่อักขระตัวแรกของ string)คืนค่าเป็น index ของอักขระตัวแรกของ string ถ้าไม่เจอคืนค่า -1
console.log(indexOf.string.indexOf('本教程',0))