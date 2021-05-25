var ana = {
  nombre: 'ANA',
  edad: 25,
  peso: 56
}

var pablo = {
  nombre: 'PABLO',
  edad: 32,
  peso: 87
}

var martin = {
  nombre: 'MARTIN',
  edad: 25,
  peso: 72
}

var julieta = {
  nombre: 'JULIETA',
  edad: 28,
  peso: 52
}

var personas = [ana, pablo, martin, julieta]

const esGorda = personas => personas.peso >68

var personasGordas = personas.filter (esGorda)

console.log (personasGordas)

const esFlaca = ({peso}) => peso < 68
var personasFlacas = personas.filter (esFlaca)
console.log (personasFlacas)

const pasarPesoAGramos = personas => ({
  //persona.altura = persona.altura *=100

//  return {
    ...personas,
    peso: personas.peso*100
    //pisamos el atributo peso
})

//es lo mismo que personas.altura = personas.altura*100

var personasAGramos = personas.map (pasarPesoAGramos)
console.log (personasAGramos)
