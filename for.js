var sofia = {
  nombre: 'Sofia',
  edad: 25,
  peso: 58
}
console.log (`Al inicio del año ${sofia.nombre} pesaba ${sofia.peso} kg`)
const CANTIDAD_DIAS = 365
const INCREMENTO_PESO = 0.3
const META = sofia.peso - 6
var dias = 0
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4



while (sofia.peso > META){

 if (comeMucho()){
   aumentarDePeso (sofia)
 }
 if (realizaDeporte()){
   adelgazar (sofia)
 }
 dias += 1
}
console.log (`Pasaron ${dias} dias hasta que ${sofia.nombre} bajo ${META}  kg`)
