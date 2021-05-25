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
for (var i = 0; i < personas.length; i++){
  var persona = personas[i]
  //para que pueda acceder a todas las personas utilizando el indice 
  console.log (`${persona.nombre} mide ${persona.peso} mts`)
}
