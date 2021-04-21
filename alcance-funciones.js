var nombre = 'Sacha'
//se la asigna al objeto global --> Windows

//accede a nombe a traves de la variable global
//function imprimirNombrEnMayusculas (){
  //nombre = nombre.toUpperCase()
  //console.log (nombre)
//}

//imprimirNombrEnMayusculas()
//en este caso modifica variables que no estan definidas dentro de ellas

function imprimirNombrEnMayusculas (n){
  n = n.toUpperCase()
  console.log (n)
}
imprimirNombrEnMayusculas(nombre)
//solo modificamos la variable local
//n solo esta definida en la funcion
//JS me permite escribir con ambos nombres la variable global y local,
//solo podemos acceder a esa variable global con windows.nombre
