let inputPic =document.getElementById("inputPic")
let pic=document.getElementById("pic")
let scanbtn=document.getElementById("btnscan")
let resdev=document.querySelector(".res")
let input_group=document.querySelectorAll(".input_feild")
let newmribtn =document.getElementById("newmri")
let show=document.querySelector(".show")



inputPic.onchange=function(){
    pic.src=URL.createObjectURL(inputPic.files[0])
}
  newmribtn.onclick=function(){
    location.reload()
  }
//----------------------------------------------------------------

  // script.js
  const picture = document.getElementById('pic');

  // Add a click event listener to the "Scan" button
  scanbtn.onclick = function(event) {
    event.preventDefault();
  const fileInput = document.getElementById('inputPic');
  const file = fileInput.files[0];
  console.log(file)

  const formData = new FormData();
  formData.append('file', file);
  console.log(formData.get('file').name);
  console.log(formData.get('file').type);
  console.log(formData.get('file').size)

// Send the file to the Flask endpoint
fetch('http://localhost:8080/classify', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
  .then(data => {
    // Print the classification result in the console
    console.log(data['Degree of demented']);
    let result=document.querySelector(".result")
    result.innerHTML=data['Degree of demented']


    let storedValues = JSON.parse(localStorage.getItem('storedValues')) || [];

    // Add the new value to the array
    storedValues.push(data['Degree of demented']);

    // Store the updated array in local storage
    localStorage.setItem('storedValues', JSON.stringify(storedValues));
  })
  .catch(error => console.error(error));

  resdev.style.display = "block";
  for (var i = 0; i < input_group.length; i++) {
    input_group[i].style.display = "none";
  } 
  scanbtn.style.display="none";

};

