//Obtener los elementos de la clase.close
lef links= document.querySelectorAll (".close");

//Recorrerlos

links.forEach(function(link)  {

//Agregar un evento click a cada unoo de ellos - case sensitive
link.addEventListener("click"), function(ev) {
ev.preventDefault();
let content = document.querySelector('.content');

//Quitarle las clases de animacion que ya tiene
content.classlist.remove("animate_heartBeat");
content.classlist.remove("animate_animated");

//Quitarle las clases de animacion que ya tiene
content.classlist.remove("animate_slideInDown");
content.classlist.remove("animate_animated");
setTimeout(function() {
  window.history.go(-1);
}, 600);
setInterval

return false;

    });
});
