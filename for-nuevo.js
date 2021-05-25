var sacha = {
  nombre: 'Sacha',
  apellido: 'Genta',
  edad: 25,
  peso: 75
}

console.log (`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`)
const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

//function aumentarDePeso (persona){
//return persona.peso += 200
//}
const aumentarDePeso = persona => persona.peso +=INCREMENTO_PESO
const adelgazarDePeso = persona => persona.peso -=INCREMENTO_PESO
for (var i=1; i<=DIAS_DEL_AÑO; i++){
  var random = Math.random()
  if (random <0.25){
    aumentarDePeso (sacha)
    //aumentoDePeso
  } else if (random < 0.5){
    adelgazarDePeso (sacha)
  }

}
console.log (`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)} kg`)
