//FUNCIONAMIENTO DEL MODAL
$(document).ready(function () {
  //Mostrar modal de politicas de privacidad
  $("#politicasPrivacidad").click(function () {
    $("#modalPoliticas").modal({
      fadeDuration: 500,
      fadeDelay: 0.5,
    });
  });

  //Mostrar modal de politicas de preguntas frecuentes
  $("#preguntasFrecuentes").click(function () {
    $("#modalPreguntas").modal({
      fadeDuration: 500,
      fadeDelay: 0.5,
    });
  });

  //Mostrar modal de politicas del formulario de registro
  $("#register").click(function () {
    $("#modalRegister").modal({
      fadeDuration: 500,
      fadeDelay: 0.5,
    });
  });

  //Acordeón con las preguntas frecuentes
  $(".accordion-header").click(function () {
    // Oculta todos los contenidos del acordeón excepto el que se hace clic
    $(".accordion-content").not($(this).next()).slideUp();

    // Cambia el icono de todos los encabezados del acordeón
    $(".accordion-header").not($(this)).removeClass("active");
    $(this).toggleClass("active");

    // Muestra u oculta el contenido del acordeón
    $(this).next().slideToggle();
  });

  //VALIDAR EL FORMULARIO
  $("#registroForm").submit(function (event) {
    event.preventDefault(); // Evitar envío del formulario al cargar la pagina

    // Validar cada campo y recoger el valor
    var nombre = $("#nombre").val();
    var apellidos = $("#apellidos").val();
    var telefono = $("#telefono").val();
    var correo = $("#correo").val();
    var usuario = $("#usuario").val();
    var pwd = $("#pwd").val();

    // Validar nombre
    if (!nombre.trim()) {
      $("#nombreError").text("Nombre no puede estar vacío").show();
    } else {
      $("#nombreError").hide();
    }

    // Validar apellidos
    if (!apellidos.trim()) {
      $("#apellidosError").text("Apellidos no pueden estar vacíos").show();
    } else {
      $("#apellidosError").hide();
    }

    // Validar teléfono
    if (!telefono.trim()) {
      $("#telefonoError").text("Teléfono no puede estar vacío").show();
    } else {
      $("#telefonoError").hide();
    }

    // Validar correo
    if (!correo.trim() || correo.indexOf("@") === -1) {
      $("#correoError").text("Correo electrónico no válido").show();
    } else {
      $("#correoError").hide();
    }

    // Validar usuario
    if (!usuario.trim() || usuario.indexOf(" ") !== -1) {
      $("#usuarioError").text("Usuario no válido").show();
    } else {
      $("#usuarioError").hide();
    }

    // Validar contraseña
    if (!pwd.trim()) {
      $("#pwdError").text("Contraseña no puede estar vacía").show();
    } else {
      $("#pwdError").hide();
    }
  });

  //SLIDER CON LOS CONTENEDORES DE LOS TRENES
  var no_of_slides, arrows_to_show;

  if (
    window.matchMedia("(max-width: 920px)").matches === true &&
    window.matchMedia("(max-width: 621px)").matches === false
  ) {
    no_of_slides = 2;
    arrows_to_show = true;
  } else if (window.matchMedia("(max-width: 620px)").matches === true) {
    no_of_slides = 1;
    arrows_to_show = false;
  } else {
    (no_of_slides = 3), (arrows_to_show = true);
  }

  //JquerySlider
  $(".slider").slick({
    slidesToShow: no_of_slides,
    slidesToScroll: 1,
    dots: false,
    arrows: arrows_to_show,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
  });
});
