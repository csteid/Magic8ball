const askText = document.querySelector("#askTextBox");
const askBtn = document.querySelector("#askBtn");
const addText = document.createElement("p");

const imgArray =[
"img/magic8ball_1.png",
"img/magic8ball_2.png",
"img/magic8ball_3.png",
"img/magic8ball_4.png",
"img/magic8ball_5.png",
"img/magic8ball_6.png",
"img/magic8ball_7.png",
"img/magic8ball_8.png",
"img/magic8ball_9.png",
"img/magic8ball_10.png",
"img/magic8ball_11.png",
"img/magic8ball_12.png",
"img/magic8ball_13.png",
"img/magic8ball_14.png",
"img/magic8ball_15.png",
"img/magic8ball_16.png",
"img/magic8ball_17.png",
"img/magic8ball_18.png",
"img/magic8ball_19.png",
"img/magic8ball_20.png",
];

askBtn.addEventListener('click',changeImg);
// create a function to change the image
function changeImg(){  
    let random = Math.floor(Math.random()*imgArray.length);
      // the random # generated is then used to choose an image 
      selectedImage = imgArray[random];
      document.getElementById("image").src = `${selectedImage}`;    
    // add question to p tag
    let setText = askText.value;
    askText.replaceWith(addText);
    addText.innerHTML = (`"${setText}"`);
    // clear text box and button
    askText.remove();
    askBtn.remove(); 
    // set 3 sec timer to clear the screen   
    setTimeout(function () {
         location.reload(true); 
         }, 3000);
 }  
 
 

    





