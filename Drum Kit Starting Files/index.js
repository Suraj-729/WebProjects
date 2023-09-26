/*document.querySelector('button').addEventListener("click", handleonClick);

function handleonClick() {   
    alert('I have Click');
    
}*/
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
     makeSound(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event) {

  makeSound(event.key);
  
});
function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
     case "x":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
     case "y":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
     case "z":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
     case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
     case "m":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
     case "n":
      var snare = new Audio('.sounds/snare.mp3');
      snare.play();
      break;
    

      default: console.log(buttonInnerHTML);
  }
}
/*document.addEventListener('click',function handleonClick(button) {

    alert('hello moto');
    
});*/ 

// var audio = new Audio('./sounds/tom-1.mp3');
//audio.play();//

