let nombre = 'Pepe'

  const persona = {
    nombre: 'S',
    apellido: 'g',
    edad: 28,
    saludar: function (){
      console.log (`Hola me llamo ${this.nombre}`)
    },
    decirAdios: function (){
      console.log ('Chau')
    }

  }
  const otraPersona = {
    ...persona,
    nombre: 'Eric',
    edad: 24
  }

  nombre = 'Lucas'
  otraPersona.saludar()
