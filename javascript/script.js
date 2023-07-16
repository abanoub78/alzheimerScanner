

let up=document.querySelector(".up")
window.onscroll=function(){
    if(this.scrollY>1000)
    {
        up.style.opacity =1;
    }else{
        up.style.opacity =0;
    }
}
up.onclick =function(){
   window.scrollTo({
    top:0,behavior: "smooth",
   });
}


let subMenu = document.getElementById("subMenu");
    
function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

//************************************* */

let profName = document.getElementById("profName");
let user_pic=document.getElementById("user_pic")
let userpic=document.getElementById("userpic")


if(localStorage.getItem("userEmail")=="abanoub@gmail.com"){
profName.innerHTML=localStorage.getItem("userName")
user_pic.src=localStorage.getItem("profilePic")
userpic.src=localStorage.getItem("profilePic")

}
else if(localStorage.getItem("userEmail")=="taha@gmail.com"){
    profName.innerHTML="Taha Ahmed"
    user_pic.src=localStorage.getItem("profilePic2")
    userpic.src=localStorage.getItem("profilePic2")

}
else{
   
}




//*******************************************/





// const urlParams = new URLSearchParams(window.location.search);
// const username = urlParams.get('username');

// var profileName = document.getElementById("profName");
// if (profileName) {
//   profileName.innerHTML = username;
// }

// var profileName = document.getElementById("profName");
// profileName.innerHTML="lll"
// console.log(profileName.innerHTML)
