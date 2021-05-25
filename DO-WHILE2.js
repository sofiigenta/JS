var contador = 0

const llueve = () => Math.random() < 0.25
do {
  contador++
  //el contador se repite hasta que llueva
}while (!llueve())
//si no llueve el do se ejecuta de vuelta, si llueve empieza el while
var texto = 'Fui a ver si llovia'
 if (contador == 1) {
   console.log(texto)
   console.log ('1 vez')}
else if (contador > 1){
  console.log (texto)
  console.log (`${contador} veces`)
}
