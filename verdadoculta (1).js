//para hacer la herencia
function heredaDe (prototipoHijo,prototipoPadre){ //los prototipos son funciones que tienen atributo prototype

//aca le decimos al prototipo hijo quien va a ser su prototipo prototipoPadre
//le asignamos un prototipo padre al prototipo hijo
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn()
  //su prototipo es un nuevo objeto de la funcion recien creada
  //asignar funcion constructora de la clase hija
  prototipoHijo.prototype.constructor = prototipoHijo
  console.log(prototipoHijo.prototype);

}


// un prototipo en javascript no puede heredar de otro
//porque no hay clases
//si existe la herencia prototipal
//se va buscando de padre a padre a ver si conoce ese mensanje, si no se conoce tirar console.error

//creamos un prototipo desarrollador , un subtipo de persona

function persona (nombre,apellido,altura){
  this.nombre = nombre
  this.apellido = apellido
  this.edad = 20
  this.altura = altura
}

persona.prototype.saludar = function ()  {
  console.log (`Hola me llamo ${this.nombre} ${this.apellido}`)
}


persona.prototype.soyAlto = function ()  {
  return this.altura > 1.8
}

function desarrollador (nombre,apellido){
  this.nombre = nombre
  this.apellido = apellido
}
desarrollador.prototype.saludar = function (){
  //es un nueva funcion, pisamos la funcion que tenia la persona
  console.log (`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
}

heredaDe(desarrollador,persona) //primero la clase hija, despues la clase padre

//var sacha = new persona ('Sofia', 'Genta', 1.90)
//var eliana = new persona ('Eliana' , 'Elias', 1.60)
