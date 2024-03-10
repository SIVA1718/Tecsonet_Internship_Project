let buttonElefirst = document.querySelector('#show-more-1');
let tagElefirst = document.querySelector('.container-1');
buttonElefirst.addEventListener('click',() => {
    tagElefirst.classList.toggle('hello');
    buttonElefirst.classList.toggle('can');
});

let buttonEleSecond = document.querySelector('#show-more-2');
let tagEleSecond = document.querySelector('.container-2');
buttonEleSecond.addEventListener('click',() => {
    tagEleSecond.classList.toggle('hello');
    buttonEleSecond.classList.toggle('can');
});

let toggleEle_2 = document.querySelector('.menu-toggle');
let navEle_2 =document.querySelector('.second-nav-bar');
let ul_Ele = document.querySelector('.ul_tag');
toggleEle_2.onclick = function(){
    navEle_2.classList.toggle('menu-active');
    ul_Ele.classList.toggle('ul_active')
   
};