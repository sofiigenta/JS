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
  ingeniero: false,
  cocinero: true,
  cantante: false,
  dj:true,
  guitarrista: false,
  drone: false,
  }

function imprimirProfesion (persona) {
    console.log (` ${persona.nombre} es: `)
  if (persona.ingeniero) {
    console.log ('Ingeniero')}
  else {console.log ('No es ingeniero')}
  if (persona.cocinero){
    console.log ('Cocinero')}
  if (persona.cantante) {
    console.log ('Cantante')}
  if (persona.dj) {
    console.log ('dj')}
  if (persona.guitarrista) {
    console.log ('Guitarrista')}
  if (persona.drone) {
    console.log ('Drone')}

}
imprimirProfesion (sacha)

function siEsMayorDeEdad (persona) {
  console.log (` ${persona.nombre} tiene ${persona.edad}` )
  if (persona.edad>18) {
    console.log ('Es mayor de edad')
  }
 else {console.log ('No es mayor de edad')}
}

siEsMayorDeEdad (sacha)
siEsMayorDeEdad (mariano)
