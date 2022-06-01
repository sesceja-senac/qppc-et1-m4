var piramideCounter = 0;
var piramideImg = document.querySelector(".piramide__img");

function checkCounter(counter) {
  switch (counter) {
    case 0:
      piramideImg.setAttribute("src", "./assets/pagina3/p1.png")
      break;
    case 1:
      piramideImg.setAttribute("src", "./assets/pagina3/p2.png")
      break;
    case 2:
      piramideImg.setAttribute("src", "./assets/pagina3/p3.png")
      break;
      case 0:
        piramideImg.setAttribute("src", "./assets/pagina3/p1.png")
        break;
      case 1:
        piramideImg.setAttribute("src", "./assets/pagina3/p2.png")
        break;
      case 2:
        piramideImg.setAttribute("src", "./assets/pagina3/p3.png")
        break;
        case 0:
          piramideImg.setAttribute("src", "./assets/pagina3/p1.png")
          break;
        case 1:
          piramideImg.setAttribute("src", "./assets/pagina3/p2.png")
          break;
        case 2:
          piramideImg.setAttribute("src", "./assets/pagina3/p3.png")
          break;
          case 0:
            piramideImg.setAttribute("src", "./assets/pagina3/p1.png")
            break;
          case 1:
            piramideImg.setAttribute("src", "./assets/pagina3/p2.png")
            break;
          case 2:
            piramideImg.setAttribute("src", "./assets/pagina3/p3.png")
            break;
  }
}

document.addEventListener("DOMContentLoaded", function(event) {

  var piramideNext = document.querySelector(".piramide__next");
  var piramidePrev = document.querySelector(".piramide__prev");

  piramideNext.addEventListener("click", function(){
    piramideCounter++;
    if(piramideCounter >= 3){
      piramideCounter = 0;
    }
    checkCounter(piramideCounter);
  })

  piramidePrev.addEventListener("click", function(){
    piramideCounter--;
    if(piramideCounter < 0){
      piramideCounter = 2;
    }
    checkCounter(piramideCounter);
  })

});