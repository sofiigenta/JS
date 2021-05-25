function persona (nombre,apellido,altura){
  this.nombre = nombre
  //-->> variable nombre que recibimos como parametro
  this.apellido = apellido
  //nombre es atributo del objeto que se esta creando que esta indicado con this
  this.edad = 20
  //todos van a tener la misma edad
  this.altura = altura
}

persona.prototype.saludar = function(){
  console.log (`Hola me llamo ${this.nombre} ${this.apellido}`)
}
//persona.prototype.altura = function(){
  //if (`${this.altura}` < 1.80){
    //console.log ('soy alto')
  //}
  //else {(console.log ('Soy bajo'))}
//}
//otra forma mas facil de hacerlo es:
persona.prototype.soyAlto =  () => this.altura > 1.8
  //return this.altura > 1.8
//dentro del prototype persona va a haber un atributo llamado saludar que es una funcion
var sacha = new persona ('Sofia', 'Genta', 1.80)
var eliana = new persona ('Eliana' , 'Elias', 1.60)
//si escribimos sacha en la consola me aparece que es persona, me indica cual es el prototipo de este objeto
//new hace que se cree un nuevo objeto con el prototipo persona
sacha.saludar()
eliana.saludar()
sacha.soyAlto()
eliana.soyAlto()

//el prototipo es un objeto mas de javascript
//es muy importante donde ponemos las funciones
