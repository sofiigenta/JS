var sacha = {
  nombre: 'Sacha',
  apellido: 'Genta',
  edad: 25,
  ingeniero: true,
  cocinero: true,
  cantante: false,
  dj: false
}

function imprimirProfesiones (persona){
  console.log (`${persona.nombre} es: `)

  if (persona.ingeniero){
    console.log ('Ingeniero')
  }
  else {console.log ('No es ingeniero')}

  if (persona.cocinero){
  console.log ('Cocinero')
  }
  else {console.log ('No es cocinero')}

  if (persona.cantante){
  console.log ('Cantante')
  }
  else {console.log ('No es cantante')}

  if (persona.dj){
    console.log ('dj')
  }
  else {console.log ('No es dj')}
}

imprimirProfesiones (sacha)
