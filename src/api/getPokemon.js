import axios from "axios"

const getPokemon = async (name) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return response.data
}

export default getPokemon
