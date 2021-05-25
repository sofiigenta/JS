var ana = {
  nombre: 'ANA',
  edad: 25,
  peso: 56,
  cantlibros: 5
}

var pablo = {
  nombre: 'PABLO',
  edad: 32,
  peso: 87,
  cantlibros: 2
}

var martin = {
  nombre: 'MARTIN',
  edad: 25,
  peso: 72,
  cantlibros: 10
}

var julieta = {
  nombre: 'JULIETA',
  edad: 28,
  peso: 52,
  cantlibros: 7

}
var personas = [ana, pablo, martin, julieta]
//var acum = 0
//for (var i = 0; i<personas.length ; i++)
//{
  //acum = acum + personas[i].cantlibros
//}
// console.log ('En total tienen ${acum} libros')
const reducer = (acum , personas) => {
  return acum + personas.cantlibros
}

var totalDeLibros = personas.reduce(reducer, 0)

console.log (`En total hay ${totalDeLibros}`)
