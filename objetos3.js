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

function imprimirNombrEnMayusculas ({nombre}){
  //desglosamos el objeto, obtenemos el nombre del objeto
  console.log (nombre.toUpperCase())
}
imprimirNombrEnMayusculas(sacha)
imprimirNombrEnMayusculas(dario)
//si llamamos a la funcion y no queremos hacer referencia a una variable:
imprimirNombrEnMayusculas({nombre: 'Pepito'})
//no podemos desglosar un objeto si no estamos seguro que siempre le vamos a mandar el objeto que espera
// imprimirNombrEnMayusculas ({apellido : 'Genta'}) nos va a dar error porque el objeto que le pasamos no tieen
//el atributo nombre
