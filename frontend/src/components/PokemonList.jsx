import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { CardPokemon } from './CardPokemon';

export const PokemonList = () => {

    const {allPokemons} = useContext(PokemonContext)

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx:auto">
                {allPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id}/>)}
            </div>
        Desde pokemonList
        </>
    )
}


