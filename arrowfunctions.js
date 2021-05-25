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

//var esMayorDeEdad = function (persona) {
  //return persona.edad >= MAYORIA_DE_EDAD

//es una funcion anonima, es decir sin nombre pero se asocia a una variable que si tiene nombre

//es lo mismo que escribir esto:
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
  //al tener un solo parametro podemos sacar los parentesis
  //variable + flecha: es una funcion
  //si una funcion lo unico que hace es retornar una variable podemos sacar la palabra return
  //desestructuramos persona en edad

function imprimirSiEsMayorDeEdad (persona) {
  //llamamos a la otra funcion
  if (esMayorDeEdad (persona))
  console.log (`${persona.nombre} es mayor de edad`)

  else {
    console.log (`${persona.nombre} es menor de edad`)
  }
}

//function permitirAcceso(persona){
  //if (!esMayorDeEdad (persona))
  //console.log ('ACCESO DENEGADO')
//}

const esMenorDeEdad = ( { edad } ) => !esMayorDeEdad({edad})
function permitirAcceso(persona){
(esMenorDeEdad(persona))?console.log("ACCESO DENEGADO") : console.log("ACCESO PERMITIDO")
}
