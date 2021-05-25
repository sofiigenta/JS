var sacha = {
  nombre: 'Sacha',
  apellido: 'Genta',
  edad: 17,
  ingeniero: true,
  cocinero: true,
  cantante: false,
  dj: false
}

function edadMayor(persona){
console.log (`${persona.nombre} es: `)
 if (persona.edad >= 18){
   console.log ('mayor de edad')}
 else {console.log (' menor de edad')}
 }

edadMayor(sacha)
