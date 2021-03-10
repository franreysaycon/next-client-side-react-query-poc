import React from "react"
import { useQuery } from "react-query"
import { useRouter } from "next/router"
import resources from "../../api/resources"
import getPokemon from "../../api/getPokemon"

const PokemonPage = ({ pokemon }) => {
    const router = useRouter()
    const pokemonName = router.query.pokemon
    const { data, isLoading } = useQuery([resources.POKEMON,  pokemonName], async () => {
        return await getPokemon(pokemonName)
    }, {
        initialData: pokemon,
    })

    if(isLoading){
        return <div>Loading pokemon</div>
    }

    return <img src={data?.sprites?.back_default} />
}

export const getStaticProps = async ({ query }) => {
    const pokemon = await getPokemon(query.pokemon)
    return { 
        props: { pokemon },
        revalidate: 1,
    }
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

export default PokemonPage
