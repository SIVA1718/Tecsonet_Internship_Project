let toggleEle_2 = document.querySelector('.menu-toggle');
let navEle_2 =document.querySelector('.second-nav-bar');
let ul_Ele = document.querySelector('.ul_tag');
toggleEle_2.onclick = function(){
    navEle_2.classList.toggle('menu-active');
    ul_Ele.classList.toggle('ul_active')
   
};

let check=true;
let registeEle = document.querySelector('#register-form');
registeEle.addEventListener('submit',(event) => {
    event.preventDefault();
  
    if(validateForm())
    {
        
        if(check == true)
        {
            alert(`Form is Successfully Submitted ^|^ :`);
        }
        
        
    }
    else{
      
        if(check == true)
        {
            alert(`Something went wrong`);
        }
       
       
    }
});
let validateForm = () => {
    if(checkNameFun() & checkContactFun() & checkEmailFun())
    {
       check=true;
       return true;
        
    }
    else{
       check=false;
        return false;
    }
}

let checkNameFun = () => {
    let inputEle =  document.querySelector('#NAME');
    let userMessage = document.querySelector('.name-required');
    if(inputEle.value.length>0)
    {
        makeValid(inputEle,userMessage);
        return true;
    }
    else{
        makeInvalid(inputEle,userMessage);
        return false;
    }
}

let  nameKey = document.querySelector('#NAME');
nameKey.addEventListener('keyup', () => {
    checkNameFun();
})


let checkContactFun = () => {
    let inputEle =  document.querySelector('#NUMBER');
    let userMessage = document.querySelector('.number-required');
    if(inputEle.value.length>0)
    {
        makeValid(inputEle,userMessage);
        return true;
    }
    else{
        makeInvalid(inputEle,userMessage);
        return false;
    }
}

let  numberKey = document.querySelector('#NUMBER');
numberKey.addEventListener('keyup', () => {
    checkContactFun();
})

// ----

let checkEmailFun = () => {
    let inputEle =  document.querySelector('#EMAIL');
    let userMessage = document.querySelector('.email-required');
    if(inputEle.value.length>0)
    {
        makeValid(inputEle,userMessage);
        return true;
    }
    else{
        makeInvalid(inputEle,userMessage);
        return false;
    }
}

let  emailKey = document.querySelector('#EMAIL');
emailKey.addEventListener('keyup', () => {
    checkEmailFun();
})
// ----

let makeValid = (inputElement,userMessage) => {
    inputElement.classList.add('active');
    inputElement.classList.remove('Inactive');
   
    userMessage.classList.remove('messageActive');
    userMessage.classList.add('messageInactive');

};
let makeInvalid = (inputElement,userMessage) => {
    inputElement.classList.add('Inactive');
    inputElement.classList.remove('active');
   
    userMessage.classList.add('messageActive');
    userMessage.classList.remove('messageInactive');
   
};

let clearELe = document.querySelector('.clear-form');
clearELe.addEventListener('click',() =>{
    check=false;
   let nameEle = document.querySelector('#NAME');
   nameEle.value=""
   let nameMessageEle = document.querySelector('.name-required');
   let numberEle = document.querySelector('#NUMBER');
   numberEle.value=""
   let emailEle =  document.querySelector('#EMAIL');
   emailEle.value=""
   let messageEle = document.querySelector('#MESSAGE');
   messageEle.value="";
    if(check==false)
    {
        alert(`Data Successfully cleared`);
    }
    
    
   
});