var nombre = 'Sofia' , apellido = 'Genta'

var nombreEnMayusculas = nombre.toUpperCase()

var apellidoEnMinusculas = apellido.toLowerCase()
var primerLetraDelNombre = nombre.charAt (0)
var cantidadDeLetrasDelNombre = nombre.length
var cantidadDeLetrasDelApellido = apellido.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`


var str = cantidadDeLetrasDelNombre-1
var str2 = cantidadDeLetrasDelApellido-1
var ultimaLetraDelNombre = nombre.charAt(str)
var ultimaLetraDelApellido = apellido.charAt(str2)
