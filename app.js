document.addEventListener("keydown", function(event) {
    if (("ASDFGHJWETYU").indexOf(event.key.toString().toUpperCase()) != -1) {
        let audio = new Audio("sounds/" + event.key.toString().toUpperCase() + ".mp3");
        audio.play();
        let pressed = document.getElementById(event.key);
        let oldColor = pressed.style.backgroundColor;
        let newColor = "white";
        if (oldColor != "white") {
            newColor = "rgb(139, 135, 135)";
        }
        document.getElementById(event.key).style.backgroundColor = newColor;
        setTimeout(function() {document.getElementById(event.key).style.backgroundColor = oldColor}, 100);
    }
  });