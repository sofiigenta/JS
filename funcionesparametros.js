class persona {
  constructor (nombre,apellido,altura){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20
    this.altura = altura
  }

//le podemos poner al parametro el nombre que queramos
//fn es pasar como parametro responder saludo
  saludar(fn){
    var {nombre,apellido} = this
    console.log (`Hola me llamo ${nombre} ${apellido}`)
    if (fn){
      //si nos pasaron algo por fn se ejecuta
      //aunque el elemento este vacio ({}) sera siempre verdadero,lo mismo con array, un string, pero no string vacio que va a ser siempre false, 0, null
      fn (nombre,apellido) //lo omitimos
      //le estamos pasando nombre, apellido
    }
  }
  //te devuelve true si es alto
  soyAlto(){
    return this.altura > 1.8
  }
}
//----------------------------------------------------------------
class Desarrollador extends persona {
  constructor (nombre,apellido,altura){
    super (nombre,apellido,altura)
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura

  }

  saludar(fn){
    var {nombre,apellido} = this
    //var nombre = this.nombre
    //var apellido = this.apellido
    console.log (`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    if (fn){
    //asi se la llma a esta funcion
    fn (nombre,apellido,true) //le pasamos que es dev
  }
}
}
function responderSaludo(nombre,apellido, esDev){ //esDev es booleano
  console.log (`Buen dia ${nombre} ${apellido}`)
  if (esDev){
    console.log (`Ah mira, no sabia que eras desarrollador`)
  }

}
//ojo porque son distintas clases
var sacha = new persona ('Sofia', 'Genta', 1.90)
var eliana = new Desarrollador ('Eliana' , 'Elias', 1.60)
var arturo = new persona ('Arturo' , 'Fernandez' , 1.80)

sacha.saludar() //en este caso sera falso
eliana.saludar(responderSaludo) //en este caso sera verdadero
arturo.saludar(responderSaludo)
