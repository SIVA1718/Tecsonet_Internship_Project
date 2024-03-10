let toggleEle_2 = document.querySelector('.menu-toggle');
let navEle_2 =document.querySelector('.second-nav-bar');
let ul_Ele = document.querySelector('.ul_tag');
toggleEle_2.onclick = function(){
    navEle_2.classList.toggle('menu-active');
    ul_Ele.classList.toggle('ul_active')
   
};

let yearButtonEle = document.querySelector('.yearly-button');
let monthButtonEle = document.querySelector('.monthly-button');
let figureOneSalaryEle = document.querySelector('#figure-one-salary');
let figureTwoSalaryEle = document.querySelector('#figure-two-salary');
let figureThreeSalaryEle = document.querySelector('#figure-three-salary');


yearButtonEle.addEventListener('click',() =>{
    yearButtonEle.classList.add('yearly-active-button');
    yearButtonEle.classList.remove('yearly-Inactive-button');
    monthButtonEle.classList.remove('monthly-active-button');
    monthButtonEle.classList.add('monthly-Inactive-button');
    figureOneSalaryEle.innerText="₹ 1,00,000/";
    figureTwoSalaryEle.innerText="₹ 1,50,000/-";
    figureThreeSalaryEle.innerText="₹ 2,00,000/-";
});

monthButtonEle.addEventListener('click',() => {
    yearButtonEle.classList.remove('yearly-active-button');
    yearButtonEle.classList.add('yearly-Inactive-button');
    monthButtonEle.classList.add('monthly-active-button');
    monthButtonEle.classList.remove('monthly-Inactive-button');
    figureOneSalaryEle.innerText="₹ 10,000/";
    figureTwoSalaryEle.innerText="₹ 15,000/-";
    figureThreeSalaryEle.innerText="₹ 20,000/-";
});
