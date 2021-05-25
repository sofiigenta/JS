var sacha = {
  nombre: 'Sacha',
  apellido: 'Genta',
  edad: 25,
  peso: 75
}

console.log (`Al inicio del año ${sacha.nombre} pesa ${sacha.peso} kg`)
const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
//function aumentarDePeso (persona){
//return persona.peso += 200
//}
const aumentarDePeso = persona => persona.peso +=INCREMENTO_PESO
const adelgazarDePeso = persona => persona.peso -=INCREMENTO_PESO
const pesoIdeal = sacha.peso -3
var dias = 0
while (sacha.peso > pesoIdeal){

  if (comeMucho ()){
    aumentarsDePeso (sacha)
  }
  if (realizaDeporte ()){
    adelgazarDePeso (sacha)
  }
  dias += 1
}
console.log (`Pasaron  ${dias} hasta que ${sacha.nombre} adelga 3kg`)
