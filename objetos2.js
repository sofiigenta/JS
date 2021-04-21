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
//--> si las variables se llaman nombreSacha y nombre dario:

//function imprimirNombrEnMayusculas (n){
  //n = n.toUpperCase()
  //console.log (n)
//}
//imprimirNombrEnMayusculas(nombreSacha)
//imprimirNombrEnMayusculas(nombreSofia)

//----------------------------------------------------

//--> si accedo a traves del nombre de la varible.atributo:

//function imprimirNombrEnMayusculas (nombre){
  //nombre = nombre.toUpperCase()
  //console.log (nombre)
//}
//imprimirNombrEnMayusculas(sacha.nombre)
//imprimirNombrEnMayusculas(dario.nombre)
//accedo al atributo nombre del objeto

function imprimirNombrEnMayusculas (persona){
  //var nombre = persona.nombre.toUpperCase()
  //console.log (nombre)
  console.log (persona.nombre.toUpperCase())
}
imprimirNombrEnMayusculas(sacha)
imprimirNombrEnMayusculas(dario)

//mirar archivo objetos3
