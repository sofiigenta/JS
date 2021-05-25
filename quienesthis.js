function persona (nombre,apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.edad = 20
  this.altura = altura
}

persona.prototype.saludar = function () = {
  console.log (`Hola me llamo ${this.nombre} ${this.apellido}`)
}


persona.prototype.soyAlto = function () = {
  return this.altura > 1.8
}

//this es el objeto global, this.altura esta indefinido EN EL OBJETO WINDOWS 
//en las arrow function cambian el this, this apunta al que este afuera de la funcion

//dentro del prototype persona va a haber un atributo llamado saludar que es una funcion
var sacha = new persona ('Sofia', 'Genta', 1.90)
var eliana = new persona ('Eliana' , 'Elias', 1.60)

sacha.saludar()
eliana.saludar()
