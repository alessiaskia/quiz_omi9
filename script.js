var juste = document.getElementById("si");
var faux = document.getElementsByClassName("false");

juste.addEventListener("click", function(el){
    turnGreen(el);
    for (var i = 0; i < faux.length; i++) {
        faux[i].style.borderColor = "red";
    }
});

function turnGreen(arg){
    arg.target.style.borderColor = "blue";
}

function turnRed(arg){
    arg.target.style.borderColor = "red";
}

/* makes number of wrong answers appear on screen + 
redirects to error page at 5 errors */


if (typeof localStorage.getItem("fautes") === undefined) {
    localStorage.setItem("fautes", 0);
  }
  score.innerText = "Erreurs : " + localStorage.getItem("fautes");

  
let btns = document.getElementsByClassName("block false");
for(let btn of btns) {
    btn.addEventListener("click", function() {
        let currentScore = parseInt(localStorage.getItem("fautes"));
        localStorage.setItem("fautes", ++currentScore);
        score.innerText = "Erreurs : " + localStorage.getItem("fautes");
        if(currentScore == 5) {
            window.location.href = "errors.html"
        }
    });
}
