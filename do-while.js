var contador = 0

const llueve = () => Math.random () < 0.25
do {
  contador++
  //el contador se repite hasta que llueva
}while (!llueve())
//si no llueve el do se ejecuta de vuelta, si llueve empieza el while
var texto = 'Fui a ver si llovia'
  if (contador > 1){
   texto += contador
   texto += 'veces'}

  // al texto se le añade la cantidad del contador para que luego muestre la cantidad de veces
  //asignada por el contador

else {texto += ' 1 vez'}
// se le asigna un mas para que me muestre el 1 de vez

console.log(texto)
