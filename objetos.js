var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  edad: 28
}

var dario = {
  nombre: 'Dario',
  apellido: 'Genta',
  edad: 25
}

function imprimirNombreYedad (persona){
 console.log('Hola me llamo' + (persona.nombre) + 'y tengo' + (persona.edad) + 'años')
}

imprimirNombreYedad (sacha)
imprimirNombreYedad (dario)
