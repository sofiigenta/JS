var sacha = {
  nombre: 'Sacha',
  apellido: 'Fernandez',
  edad: 25
}
var dario = {
  nombre: 'Dario',
  apellido: 'Fernandez',
  edad: 28
}


function imprimirNombreYedad (persona){
  var nombre = persona.nombre
  var edad = persona.edad
  console.log ('Hola me llamo', nombre ,'y tengo', edad ,'años')
}
imprimirNombreYedad(sacha)
imprimirNombreYedad(dario)
