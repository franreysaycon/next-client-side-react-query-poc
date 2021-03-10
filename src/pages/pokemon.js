import dynamic from "next/dynamic"

const PokemonPageNoSsr = dynamic(() => import('../components/PokemonPage'), {
    ssr: false
})

export default PokemonPageNoSsr
