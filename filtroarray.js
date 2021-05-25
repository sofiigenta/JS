var ana = {
  nombre: 'ANA',
  edad: 25,
  peso: 56,
  altura: 1.56
}

var pablo = {
  nombre: 'PABLO',
  edad: 32,
  peso: 87,
  altura: 1.62
}

var martin = {
  nombre: 'MARTIN',
  edad: 25,
  peso: 72,
  altura: 1.38
}

var julieta = {
  nombre: 'JULIETA',
  edad: 28,
  peso: 52,
  altura: 1.80
}

var personas = [ana, pablo, martin, julieta]
//une los objetos en un array denominado personas
const esGorda = personas => personas.peso >68

var personasGordas = personas.filter (esGorda)
console.log ('Las personas gordas son')
console.log (personasGordas)

const esFlaca = ({peso}) => peso < 68
var personasFlacas = personas.filter (esFlaca)
console.log ('Las personas flacas son')
console.log (personasFlacas)

const esAlta = ({altura}) => altura < 1.50
var personasAltas = personas.filter (esAlta)
console.log ('Las personas bajas son:')
console.log (personasAltas)

const esBaja = personas => personas.altura > 1.50
var personasBajas = personas.filter (esBaja)
console.log ('Las personas altas son')
console.log (personasBajas)
