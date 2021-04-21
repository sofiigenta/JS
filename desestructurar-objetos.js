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

function imprimirNombrEnMayusculas (persona){
  //desglosamos el objeto, obtenemos el nombre del objeto
  // para no tener 2 veces nombre con la variable y con persona.nombre
  // var nombre = persona.nombre 
  var {nombre} = persona
  console.log (nombre.toUpperCase())
}
imprimirNombrEnMayusculas(sacha)
imprimirNombrEnMayusculas(dario)
