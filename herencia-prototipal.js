function heredaDe (prototipoHijo, prototipoPadre){
  var fn = function () {}
  fn.sprototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn
  prototipoHijo.prototype.constructor = prototipoHijo
}

function persona (nombre,apellido,altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}





//var sacha = new persona ('Sacha','Genta', 1.90)

//var agustina = new persona ('Agustina','Genta', 1.75)

//var mercedes = new persona ('Mercedes','Genta', 1.62)

//var mariano = new persona ('Mariano','Genta', 1.89)
persona.prototype.saludar = function (){
  console.log (`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.alt = function (){
  if (`${this.altura}`>1.80){
    console.log ('Es alto')}

else {console.log ('Es bajo')}
}

function desarrollador (nombre,apellido) {
  this.nombre = nombre
  this.apellido = apellido
}
desarrollador.prototype.saludar = function (){
  console.log (`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}
heredaDe (desarrollador, persona)
