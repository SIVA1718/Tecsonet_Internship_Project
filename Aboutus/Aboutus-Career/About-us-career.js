
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
        alert(`Please fill all the requirements`);
    }
});
let validateForm = () => {
    if(checkUsername() & contactNumber() & emailCheckFun() & checkProfileName() & checkLocation()  & checkFile())
    {
       return true;
        
    }
    else{
        return false;
    }
};
let checkUsername = () => {
    let UsernameEle = document.querySelector('#NAME');
    let regExe = /^[a-zA-Z0-9]{4,12}$/;
    if(regExe.test(UsernameEle.value))
    {
        
        makeValid(UsernameEle);
        return true;
       
    }
    else
    {
        makeInvalid(UsernameEle);
        return false;
    }
}
let makeValid = (inputEle) =>
{
    inputEle.classList.add('correctOne');
    inputEle.classList.remove('wrongOne');
   
}
let makeInvalid = (inputEle,feedbackEle) => {
    inputEle.classList.remove('correctOne');
    inputEle.classList.add('wrongOne');
}
let userKeyup = document.querySelector('#NAME');
userKeyup.addEventListener('keyup', () => {
    checkUsername();
});

let contactNumber = () => {
    let NumberEle = document.querySelector('#NUMBER');
    let regExe = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    if(regExe.test(NumberEle.value))
    {
        
        makeValid(NumberEle);
        return true;
       
    }
    else
    {
        makeInvalid(NumberEle);
        return false;
    }
}
let numberkeyup = document.querySelector('#NUMBER');
numberkeyup.addEventListener('keyup', () => {
    contactNumber();
});
let emailCheckFun = () => {
    let EmailEle = document.querySelector('#EMAIL');
    let regExe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regExe.test(EmailEle.value))
    {
      
        makeValid(EmailEle);
        return true;
    }
    else{

        makeInvalid(EmailEle);
        return false;
    }

};
let emailkeyup = document.querySelector('#EMAIL');
emailkeyup.addEventListener('keyup', () => {
    emailCheckFun();
});

let checkLocation = () => {
    let locationEle=document.querySelector('#LOCATION');
    let regExe =/^[a-zA-Z0-9]{6,25}$/;
    if(regExe.test(locationEle.value))
    {
      
        makeValid(locationEle);
        return true;
    }
    else{

        makeInvalid(locationEle);
        return false;
    }
}
let locationKeyup = document.querySelector('#LOCATION');
locationKeyup.addEventListener('keyup', () => {
    checkLocation();
});

let checkProfileName = () => {
    let profilenameEle = document.querySelector('#SELECT');
    if(profilenameEle.value == "none")
    {
        makeInvalid(profilenameEle);
        return false;
       
    }
    else{
        makeValid(profilenameEle);
        return true;
    }
} 
let profileKeyup = document.querySelector('#SELECT');
profileKeyup.addEventListener('keyup', () => {
    checkProfileName();
});

let checkFile = () => {
    let fileEle = document.querySelector('#FILE');
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
    if(allowedExtensions.exec(fileEle.value)){
        makeValid(fileEle);
        return true;
    }
    else{
        makeInvalid(fileEle);
        return false;
    }
};
let filekeyup = document.querySelector('#FILE');
filekeyup.addEventListener('keyup',() => {
    checkFile();
});