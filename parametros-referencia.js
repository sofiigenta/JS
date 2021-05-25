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
  //var nombre = persona.nombre.toUpperCase()
  //console.log (nombre)
  console.log (persona.nombre.toUpperCase())
}
imprimirNombrEnMayusculas(sacha)
imprimirNombrEnMayusculas(dario)
//me modifica el objeto
//function cumpleaños (persona){
  //persona.edad +=1
//}

//devolver un nuevo objeto
function cumpleanos (persona){
  return {
    ...persona,
    edad: persona.edad+1
  }
}
