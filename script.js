$(document).ready(function () {

  // 1. Click en el botón
  $("#activarHab").click(function () {
    alert("¡Habilidad activada! BEEP BEEP BEEP BEEP");
    $(".carta_batalla").addClass("activa");
  });

  // 2. Contador de activaciones
  let veces = 0;
  $("#activarHab").click(function () {
    veces++;
    $("#contador").text("Activada " + veces + " veces");
  });

});