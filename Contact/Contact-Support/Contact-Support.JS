let toggleEle_2 = document.querySelector('.menu-toggle');
let navEle_2 =document.querySelector('.second-nav-bar');
let ul_Ele = document.querySelector('.ul_tag');
toggleEle_2.onclick = function(){
    navEle_2.classList.toggle('menu-active');
    ul_Ele.classList.toggle('ul_active')
   
};


let regEle = document.querySelector('#reg-form');
regEle.addEventListener('submit',(event) => {
    event.preventDefault();
  
    if(validateForm())
    {
        alert(`Form is Successfully Submitted ^|^ :`)
    }
    else{
        alert(`Something went wrong`);
    }
});
let validateForm = () => {
    if(checkNameFun() & checkNumFun() & checkEmailFun() & checkSelectFun()){
        return true;
    }
    else{
        return false;
    }
}

let checkNameFun  = () =>{
    let nameEle = document.querySelector('#NAME');
    let regExp = /^[a-zA-Z]{4,18}$/;
    if(regExp.test(nameEle.value))
    {
        
        makeValid(nameEle);
        return true;
       
    }
    else
    {
       
        makeInvalid(nameEle);
        return false;
    }
};

let checkNumFun  = () =>{
    let numberEle = document.querySelector('#NUMBER');
    let regExp = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    if(regExp.test(numberEle.value))
    {
        
        makeValid(numberEle);
        return true;
       
    }
    else
    {
       
        makeInvalid(numberEle);
        return false;
    }
};

let checkEmailFun  = () =>{
    let emailEle = document.querySelector('#EMAIL');
    let regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regExp.test(emailEle.value))
    {
        
        makeValid(emailEle);
        return true;
       
    }
    else
    {
       
        makeInvalid(emailEle);
        return false;
    }
};

let checkSelectFun = () => {
    let selectEle = document.querySelector('#SELECT');
    if(selectEle.value != "Select")
    {
        
        return true;
    }
    else{
       
        return false;
    }
}

let makeValid = (inputEle) =>{
    inputEle.classList.add('active');
    inputEle.classList.remove('inactive');
};
let makeInvalid = (inputEle) => {
    inputEle.classList.add('inactive');
    inputEle.classList.remove('active');
};
let nameKeyUp = document.querySelector('#NAME');
nameKeyUp.addEventListener('keyup',() => {
    checkNameFun();
});

let numberKeyUp = document.querySelector('#NUMBER');
numberKeyUp.addEventListener('keyup',() => {
    checkNumFun();
});

let emailKeyUp = document.querySelector('#EMAIL');
emailKeyUp.addEventListener('keyup',() => {
    checkEmailFun();
});

let selectKeyUp = document.querySelector('#SELECT');
selectKeyUp.addEventListener('keyup',() => {
    checkSelectFun();
});