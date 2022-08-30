const OPEN_CLASSNAME = "open";
const CURRENT_CLASSNAME = "current";
const HIDDEN_CLASSNAME = "hidden";

const navLinks = document.getElementById("nav-links");
const navMenu = document.getElementById("header-menu");

function toggleMenu() {
  if (navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.remove(OPEN_CLASSNAME);
    navMenu.classList.remove(OPEN_CLASSNAME);
  } else {
    navLinks.classList.add(OPEN_CLASSNAME);
    navMenu.classList.add(OPEN_CLASSNAME);
  }
}


// Array or reviews
const arrayOfReviews = Array(4);
for (let i =0;i<arrayOfReviews.length;i++){
  arrayOfReviews[i]=document.getElementById("review"+i);
}

// Switching between objects
function reviewSwitch(id,btn=null){
  for (let i =0; i<arrayOfReviews.length;i++) { 
    if (arrayOfReviews[i].classList.contains(CURRENT_CLASSNAME)) {
      arrayOfReviews[i].classList.add(HIDDEN_CLASSNAME);
      setTimeout(function(){arrayOfReviews[i].classList.remove(CURRENT_CLASSNAME);},400);
      
      if (arrayOfReviews[id].classList.contains(HIDDEN_CLASSNAME)) {
        arrayOfReviews[id].classList.remove(HIDDEN_CLASSNAME);
      }
      setTimeout(function(){arrayOfReviews[id].classList.add(CURRENT_CLASSNAME);},400); 
        break;
    }
  };
}

// Buttons with arrows
function switchLeft(){
    for (var e of arrayOfReviews){
        if (e.classList.contains(CURRENT_CLASSNAME) && arrayOfReviews[arrayOfReviews.indexOf(e)-1]!=null)  {
            reviewSwitch(arrayOfReviews.indexOf(e)-1)
        break
    }
  };
}
function switchRight(){
    for (var e of arrayOfReviews){
        if (e.classList.contains(CURRENT_CLASSNAME) && arrayOfReviews[arrayOfReviews.indexOf(e)+1]!=null)  {
            reviewSwitch(arrayOfReviews.indexOf(e)+1)
        break
    }
  };
}
