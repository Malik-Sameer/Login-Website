let wrapper=document.querySelector(".wrapper");
let loginlink=document.querySelector(".login-link");
let registerlink=document.querySelector(".register-link");
let loginbtn=document.querySelector("#login-btn");
let crossbtn=document.querySelector(".space-icon");
let lock=document.getElementById("lock");
let password=document.getElementById("password");
let lock2=document.getElementById("lock2");
let password2=document.getElementById("password2");


registerlink.addEventListener("click",function(){
    wrapper.classList.add("active")
})

loginlink.addEventListener("click",function(){
    wrapper.classList.remove("active")
})
loginbtn.addEventListener("click",function(){
    wrapper.classList.add("active-popup")
    document.getElementById("page1").classList.add("active-here")
})
crossbtn.addEventListener("click",()=>{
    wrapper.classList.remove("active-popup")
    document.getElementById("page1").classList.remove("active-here")
})
function onClickMenu(){
    document.querySelector(".navigation").classList.toggle("active")
    document.getElementById("hamburger").classList.toggle("active")
    document.getElementById("total").classList.toggle("active")
}
lock.addEventListener("click",()=>{
    if(password.type=="password"){
       password.type ="text";
       lock.innerHTML='<ion-icon name="lock-open"></ion-icon>';
    }
    else{
        password.type="password";
        lock.innerHTML='<ion-icon name="lock-closed"></ion-icon>';
    }
})
lock2.addEventListener("click",()=>{
    if(password2.type=="password"){
       password2.type ="text";
       lock2.innerHTML='<ion-icon name="lock-open"></ion-icon>';
    }
    else{
        password2.type="password";
        lock2.innerHTML='<ion-icon name="lock-closed"></ion-icon>';
    }
})
