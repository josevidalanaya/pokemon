const axios = require('axios').default
const pokemonApi = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' })
const pokemon = {}

pokemon.getAll = async () => {
    const res = await pokemonApi.get('/pokemon', { params: { limit: 493, offset: 0 } })
    return res.data
}

pokemon.getAll().then((res) => {
    console.log(JSON.stringify(res, null, ' '))
})