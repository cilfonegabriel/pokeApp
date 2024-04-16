import { useEffect, useState, ReactNode } from "react"
import { PokemonContext } from "./PokemonContext"

interface Pokemon {
    id: number;
    name: string;
    // Define el resto de las propiedades del Pokemon aquí
}

interface PokemonProviderProps {
    children: ReactNode;
}

export const PokemonProvider = ({ children }: PokemonProviderProps) => {

    const [allPokemons, setAllPokemons] = useState<Pokemon[]>([])


    //Llamar 50 pokemones a la API
    const getAllPokemons = async () => {
        const baseUrl = 'http://localhost:4000/'

        const res = await fetch(`${baseUrl}api/pokemon`)
        const data = await res.json()
        console.log(data)

        setAllPokemons(data) 
    }



    useEffect(() => {
        getAllPokemons()
    }, [])

    return (
        <PokemonContext.Provider value={{
            numero:0
        }} >
            {children}
        </PokemonContext.Provider>
    );
}