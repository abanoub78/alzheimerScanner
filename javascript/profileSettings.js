let profileEditeDiv=document.querySelector(".profileEdite")
let close=document.querySelector(".close")
let save=document.querySelector(".save")
let editprofile=document.querySelector(".editprofile")
let changePhoto=document.querySelector(".uploadpic")
let pic1=document.getElementById("pic1")
let pic2=document.getElementById("pic2")
let newName=document.querySelector(".newname")
let userName=document.querySelector(".username")


  
close.onclick = function(event) {
    event.preventDefault();
    profileEditeDiv.style.display = "none";

  }

  editprofile.onclick = function(event) {
    event.preventDefault();
    profileEditeDiv.style.display = "block";

  }

  changePhoto.onchange=function(){
    pic1.src=URL.createObjectURL(changePhoto.files[0])
}




if(localStorage.getItem("userEmail")=="abanoub@gmail.com"){

save.onclick = function(event) {
  event.preventDefault();

  // Save the profile picture as a base64-encoded string in local storage
  if (changePhoto.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function() {
      localStorage.setItem('profilePic', reader.result);
      pic2.src = reader.result;
    }
    reader.readAsDataURL(changePhoto.files[0]);
  }

  // Save the user name in local storage
  if (newName.value.trim() !== '') {
    localStorage.setItem('userName', newName.value);
    userName.innerHTML = newName.value;
  }
}

// Load the profile picture and user name from local storage when the page is loaded
window.addEventListener('load', function() {


    const savedProfilePic = localStorage.getItem('profilePic');
    if (savedProfilePic) {
      pic2.src = savedProfilePic;
    }
  
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
      userName.innerHTML = savedUserName;
    }
  //  }



});

}

else if(localStorage.getItem("userEmail")=="taha@gmail.com"){

  save.onclick = function(event) {
    event.preventDefault();
  
    // Save the profile picture as a base64-encoded string in local storage
    if (changePhoto.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function() {
        localStorage.setItem('profilePic2', reader.result);
        pic2.src = reader.result;
      }
      reader.readAsDataURL(changePhoto.files[0]);
    }
  
    // Save the user name in local storage
    if (newName.value.trim() !== '') {
      localStorage.setItem('userName', newName.value);
      userName.innerHTML = "Taha Ahmed";
    }
  }
  
  // Load the profile picture and user name from local storage when the page is loaded
  window.addEventListener('load', function() {
  
  
      const savedProfilePic = localStorage.getItem('profilePic2');
      if (savedProfilePic) {
        pic2.src = savedProfilePic;
      }
    
      const savedUserName = localStorage.getItem('userName');
      if (savedUserName) {
        userName.innerHTML = "Taha Ahmed";
      }
    //  }
  
  
  
  });
}
else{
  save.onclick = function(event) {
  event.preventDefault();

  // Check if the input for changing the photo has a file selected
  if (changePhoto.files.length > 0) {
    pic2.src=URL.createObjectURL(changePhoto.files[0]);
  }

  // Check if the input for changing the user name is not empty
  if (newName.value.trim() !== '') {
    userName.innerHTML = newName.value;
  }
}
}

let passbtn=document.querySelector(".passdrop")
let passset=document.querySelector(".PassSet")
let arrow=document.querySelector(".arw")
let Close=document.querySelector(".Close")
let update=document.querySelector(".update")



Close.onclick = function(event) {
  event.preventDefault();
  passset.style.display = "none";
  arrow.style.display = "none";

}

passbtn.onclick = function(event) {
  event.preventDefault();
  passset.style.display = "block";
  arrow.style.display = "block";


}