var nombre = 'Sacha' , edad = 28

function imprimirEdad(){
  console.log (`${nombre} tiene ${edad} años`)
                      }

imprimirEdad ()


// con parametros

function imprimirEdad (nombre,edad){
  console.log (`${nombre} tiene ${edad} años`)
}

imprimirEdad (nombre,edad)
