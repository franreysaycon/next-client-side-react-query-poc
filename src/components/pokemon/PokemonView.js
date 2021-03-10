import React from "react"
import { useQuery } from "react-query"
import resources from "../../api/resources"
import getPokemon from "../../api/getPokemon"
import { useParams } from "react-router"

const PokemonView = () => {
    const { name } = useParams()
    const { data, isLoading } = useQuery([resources.POKEMON,  name], async () => {
        return await getPokemon(name)
    })

    if(isLoading){
        return <div>Loading pokemon</div>
    }

    return <img src={data?.sprites?.back_default} />
}

export default PokemonView
