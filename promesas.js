const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
      .get(url, opts, function (data) {
        resolve(data)
      })
      .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje ${id}`)//el id es el de fail
}

obtenerPersonaje(1)
  .then(function (personaje) { //data es el personaje, si se resuelve exactamente la promesa
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(onError)
