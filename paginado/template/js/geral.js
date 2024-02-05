window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('.preloader').fadeOut(300);

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
})

/* var pg_number = parseInt(window.location.href.split("?")[1].split("=")[1]);
console.log("pg_number:", pg_number);
$("#navbarScroll a").eq(pg_number).addClass("ativo");
$("#navbarScrollingDropdown span").html(
  $("#navbarScroll a").eq(pg_number).text()
); */

var pg_number = parseInt(window.location.href.split("?")[1].split("=")[1]);
console.log("pg_number:", pg_number);

// Verifique se #navbarScroll e #navbarScrollingDropdown existem
if ($("#navbarScroll").length > 0 && $("#navbarScrollingDropdown").length > 0) {
  // Verifique se pg_number é um índice válido para os elementos em #navbarScroll
  if (pg_number >= 0 && pg_number < $("#navbarScroll a").length) {
    $("#navbarScroll a").eq(pg_number).addClass("ativo");
    $("#navbarScrollingDropdown span").html(
      $("#navbarScroll a").eq(pg_number).text()
    );
  }
}


  //alert('URL: '+pg_number);

/*   if (pg_number == 1) {
    document.body.style.backgroundImage = "url('assets/pagina1/background1.jpg')";
  } */ 
  else if (pg_number == 2) {
    document.body.style.backgroundImage = "url('assets/pagina1/background1.jpg')";
    document.getElementById("titulo-header").setAttribute("style", "color:#fff");
  } else if (pg_number == 3) {
    document.body.style.backgroundImage = "url('images/bg_pg3.jpg')";
  } else if (pg_number == 4) {
    document.body.style.backgroundImage = "url('assets/pagina1/background1.jpg')";
  } else if (pg_number == 8) {
    document.body.style.backgroundImage = "url('assets/pagina6e7/refs.jpg')";
  }