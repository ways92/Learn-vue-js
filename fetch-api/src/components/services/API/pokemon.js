import axios from 'axios'

function getPokemons () {
  return new Promise((resolve, reject) => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then((resp) => {
        resolve(resp.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

function getPokemon ({ id }) {
  console.log(id)
  return new Promise((resolve, reject) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => {
        resolve(resp.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default {
  getPokemons,
  getPokemon
}
