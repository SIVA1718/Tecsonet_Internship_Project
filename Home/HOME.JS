
let toggleEle_2 = document.querySelector('.menu-toggle');
let navEle_2 =document.querySelector('.second-nav-bar');
let ul_Ele = document.querySelector('.ul_tag');
toggleEle_2.onclick = function(){
    navEle_2.classList.toggle('menu-active');
    ul_Ele.classList.toggle('ul_active')
   
};
let websiteEle = document.querySelector('#WEBSITE-BTN');
let smmEle = document.querySelector('#SMM-BTN');
let seoEle = document.querySelector('#SEO-BTN');
let cvEle = document.querySelector('#CV-BTN');

let section_5_Ele = document.querySelector('.section-5');
let section_6_Ele = document.querySelector('.section-6');
let section_7_Ele = document.querySelector('.section-7');
let section_8_Ele = document.querySelector('.section-8');

websiteEle.addEventListener('click',() => {
    websiteEle.classList.add('active-btn');
    websiteEle.classList.remove('inactive-btn');

    smmEle.classList.add('inactive-btn');
    smmEle.classList.remove('active-btn');

    seoEle.classList.add('inactive-btn');
    seoEle.classList.remove('active-btn');

    cvEle.classList.add('inactive-btn');
    cvEle.classList.remove('active-btn');

    section_5_Ele.classList.add('section-active');
    section_5_Ele.classList.remove('section-inactive');

    section_6_Ele.classList.add('section-inactive');
    section_6_Ele.classList.remove('section-active');

    section_7_Ele.classList.add('section-inactive');
    section_7_Ele.classList.remove('section-active');

    section_8_Ele.classList.add('section-inactive');
    section_8_Ele.classList.remove('section-active');
    

});

smmEle.addEventListener('click',() => {
    smmEle.classList.add('active-btn');
    smmEle.classList.remove('inactive-btn');

    websiteEle.classList.add('inactive-btn');
    websiteEle.classList.remove('active-btn');

    seoEle.classList.add('inactive-btn');
    seoEle.classList.remove('active-btn');

    cvEle.classList.add('inactive-btn');
    cvEle.classList.remove('active-btn');

    section_5_Ele.classList.remove('section-active');
    section_5_Ele.classList.add('section-inactive');
    
    section_6_Ele.classList.remove('section-inactive');
    section_6_Ele.classList.add('section-active');

    section_7_Ele.classList.add('section-inactive');
    section_7_Ele.classList.remove('section-active');

    section_8_Ele.classList.add('section-inactive');
    section_8_Ele.classList.remove('section-active');
});

seoEle.addEventListener('click',() => {
    seoEle.classList.add('active-btn');
    seoEle.classList.remove('inactive-btn');

    websiteEle.classList.add('inactive-btn');
    websiteEle.classList.remove('active-btn');

    smmEle.classList.add('inactive-btn');
    smmEle.classList.remove('active-btn');

    cvEle.classList.add('inactive-btn');
    cvEle.classList.remove('active-btn');

    section_5_Ele.classList.remove('section-active');
    section_5_Ele.classList.add('section-inactive');
    
    section_6_Ele.classList.add('section-inactive');
    section_6_Ele.classList.remove('section-active');

    section_7_Ele.classList.remove('section-inactive');
    section_7_Ele.classList.add('section-active');

    section_8_Ele.classList.add('section-inactive');
    section_8_Ele.classList.remove('section-active');
});


cvEle.addEventListener('click',() => {
    cvEle.classList.add('active-btn');
    cvEle.classList.remove('inactive-btn');

    websiteEle.classList.add('inactive-btn');
    websiteEle.classList.remove('active-btn');

    smmEle.classList.add('inactive-btn');
    smmEle.classList.remove('active-btn');

    seoEle.classList.add('inactive-btn');
    seoEle.classList.remove('active-btn');

    section_5_Ele.classList.remove('section-active');
    section_5_Ele.classList.add('section-inactive');
    
    section_6_Ele.classList.add('section-inactive');
    section_6_Ele.classList.remove('section-active');

    section_7_Ele.classList.add('section-inactive');
    section_7_Ele.classList.remove('section-active');

    section_8_Ele.classList.remove('section-inactive');
    section_8_Ele.classList.add('section-active');
});