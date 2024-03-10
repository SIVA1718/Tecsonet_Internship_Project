let toggleEle_2 = document.querySelector('.menu-toggle');
let navEle_2 =document.querySelector('.second-nav-bar');
let ul_Ele = document.querySelector('.ul_tag');
toggleEle_2.onclick = function(){
    navEle_2.classList.toggle('menu-active');
    ul_Ele.classList.toggle('ul_active')
   
};
let PhotographyBtnEle = document.querySelector('.Photography-button');
let VideoBtnEle = document.querySelector('.video-button');
let sectionFourDiv = document.querySelector('.section-4');
let sectionFiveDiv = document.querySelector('.section-5');

PhotographyBtnEle.addEventListener('click',() =>{
    PhotographyBtnEle.classList.add('Photography-active-button');
    PhotographyBtnEle.classList.remove('Photography-Inactive-button');
    VideoBtnEle.classList.remove('video-active-button');
    VideoBtnEle.classList.add('video-Inactive-button');


    sectionFiveDiv.classList.add('section-5-Inactive');
    sectionFiveDiv.classList.remove('section-5-active');
    sectionFourDiv.classList.add('section-4-active');
    sectionFourDiv.classList.remove('section-4-Inactive');
    
});

VideoBtnEle.addEventListener('click',() => {
    PhotographyBtnEle.classList.remove('Photography-active-button');
    PhotographyBtnEle.classList.add('Photography-Inactive-button');
    VideoBtnEle.classList.add('video-active-button');
    VideoBtnEle.classList.remove('video-Inactive-button');

    
    sectionFiveDiv.classList.add('section-5-active');
     sectionFiveDiv.classList.remove('section-5-Inactive');
    sectionFourDiv.classList.add('section-4-Inactive');
    sectionFourDiv.classList.remove('section-4-active');
    
});


