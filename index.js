

// ---------button press--------
var numberofdrumbuttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofdrumbuttons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
});

}

//---------KEyboard press-----------

document.addEventListener("keypress",function(event){

  makesound(event.key);
  buttonAnimation(event.key);
});


function makesound(key) {

  switch (key) {

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":

      var kick_bass = new Audio("sounds/kick-bass.mp3");
      kick_bass.play();
      break;

    case "s":

      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;

    case "d":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;

      case "j":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;

    case "k":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;

    default:console.log(buttonInnerHTML);
}
}



function buttonAnimation(currentkey){
  var activeButton = document.querySelector("." + currentkey);

activeButton.classList.add("pressed");

setTimeout(function() {
  activeButton.classList.remove("pressed");
},100);
}
