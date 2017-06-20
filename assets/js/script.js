//funcion para arrastrar
function drag(ev) {
  console.log(ev.target.id); //verificamos en consola lo que está ocurriendo
  //indicamos el tipo de dato a insertar
  ev.dataTransfer.setData('text', ev.target.id);
}
//inicializar drop
function permitirDrop(ev){
  ev.preventDefault();//evitamos que el navegador manipule nuestros datos
}
function drop(ev) {
  ev.preventDefault();
  //tomamos el dato que estamos arrastrando
  var id_foto = ev.dataTransfer.getData('text');
  //agregamos el elemento arrastrado al elemento en que se produjo el evento ondrop
  ev.target.appendChild(document.getElementById(id_foto));
}