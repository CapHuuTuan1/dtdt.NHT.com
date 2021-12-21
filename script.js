const addressbtn = document.querySelector('#address-form')
const addressclose = document.querySelector('#address-close')
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNumbertwo = document.querySelectorAll('.slider-product-one-content-items')
let index = 0
const rightbtnthree = document.querySelector('.fa-chevron-right-three')
const leftbtnthree = document.querySelector('.fa-chevron-left-three')
const imgNumberthree = document.querySelectorAll('.box-common-content-link-items')
const rightbtnfour = document.querySelector('.fa-chevron-right-four')
const leftbtnfour = document.querySelector('.fa-chevron-left-four')
const imgNumberfour = document.querySelectorAll('.product-gallery-two-content-left-bottom-items')
//console.log(addressbtn)
//console.log(rightbtn)
//console.log(rightbtntwo)
addressbtn.addEventListener("click", function() {
    document.querySelector('.address-form').style.display = "flex"
})
addressclose.addEventListener("click", function () {
    document.querySelector('.address-form').style.display = "none"
})
//slider------------------------
rightbtn.addEventListener("click", function () {
    index = index + 1
    if (index > imgNumber.length - 1) {
        index=0
    }
    document.querySelector('.slider-content-left-top').style.right = index*100+"%"
})
leftbtn.addEventListener("click", function () {
    index = index - 1
    if (index <= 0) {
        index = imgNumber.length-1
    }
    document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
})
//slider 1---------------
imgNumberLi.forEach(function (image, index) {
    image.addEventListener("click", function () {
        removeactive()
        document.querySelector('.slider-content-left-top').style.right = index * 100 + "%"
        image.classList.add("active")
    })
})
function removeactive(){
    let imgactive = document.querySelector('.active')
    image.classList.remove("active")
}
//slider2--------------------------------
function imgAuto() {
    index = index + 1
    if (index > imgNumber.length - 1) {
        index=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index*100+"%"
}
//secInterval(imgAuto,5000)
//slider-product-------------
rightbtntwo.addEventListener("click", function () {
    index = index + 1
    if (index > imgNumbertwo.length - 1) {
        index = 0
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index * 100 + "%"
})
leftbtntwo.addEventListener("click", function () {
    index = index - 1
    if (index <= 0) {
        index = imgNumbertwo.length - 1
    }
    document.querySelector('.slider-product-one-content-items-content').style.right = index * 100 + "%"
})
//box-common-----------------
rightbtnthree.addEventListener("click", function () {
    index = index + 1
    if (index > imgNumberthree.length - 1) {
        index = 0
    }
    document.querySelector('.box-common-content-link').style.right = index * 100 + "%"
})
leftbtnthree.addEventListener("click", function () {
    index = index - 1
    if (index < 0) {
        index = imgNumberthree.length - 1
    }
    document.querySelector('.box-common-content-link').style.right = index * 100 + "%"
})
//box-common-one-----------------
rightbtnfour.addEventListener("click", function () {
    index = index + 1
    if (index > imgNumberthree.length - 1) {
        index = 0
    }
    document.querySelector('.box-common-one-content-link').style.right = index * 100 + "%"
})
leftbtnfour.addEventListener("click", function () {
    index = index - 1
    if (index < 0) {
        index = imgNumberthree.length - 1
    }
    document.querySelector('.box-common-one-content-link').style.right = index * 100 + "%"
})
//product-gallery-two---------





