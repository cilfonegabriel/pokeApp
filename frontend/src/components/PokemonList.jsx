import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import { CardPokemon } from './CardPokemon';
import Loader from "./Loader";

export const PokemonList = () => {

    const {allPokemons, loading, filteredPokemons} = useContext(PokemonContext)

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 mx-10 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx:aut0o">
                        {
                            filteredPokemons.length ? (

                                <>
                                    {filteredPokemons.map(pokemon => 
                                        <CardPokemon pokemon={pokemon} key={pokemon.id}/>
                                    )}
                                </>

                            ) : (
                                <>
                                    {allPokemons.map(pokemon => 
                                        <CardPokemon pokemon={pokemon} key={pokemon.id}/>
                                    )}
                                </>
                            )
                        }
                    </div>
                )
            }

        </>
    )
}


