var sacha = {
nombre: 'Sacha',
apellido: 'Genta',
edad: 25,
ingeniero: false,
cocinero: false,
cantante: false,
dj: false,
guitarrista: false,
drone: true
}

var mariano = {
  nombre: 'Mariano',
  apellido: 'Fernandez',
  edad: 13,
  }

const MAYORIA_DE_EDAD = 18

function esMayorDeEdad (persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad (persona) {
  if (esMayorDeEdad (persona))
  console.log (`${persona.nombre} es mayor de edad`)

  else {
    console.log (`${persona.nombre} es menor de edad`)
  }
}
