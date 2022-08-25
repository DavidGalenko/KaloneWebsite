//JS for Menuicon



//JS for product gallery

var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
    productImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
    productImg.src = smallImg[3].src;
}

//JS for toggle form

var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

function login(){
    regForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
}
function register(){
    regForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";

}