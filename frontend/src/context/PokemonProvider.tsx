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
    const [globalAllPokemons, setGlobalAllPokemons] = useState<Pokemon[]>([])

    const [offset, setOffset] = useState(0)

    //Estados simples
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)


    //Llamar 50 pokemones a la API
    const getAllPokemons = async (limit = 50) => {
        const baseUrl = 'http://localhost:4000/'
        const res = await fetch(`${baseUrl}api/pokemon/?limit=${limit}&offset=${offset}`);
        const results = await res.json()

        setAllPokemons([
            ...allPokemons,
            ...results
        ]) 
        setLoading(false)
    }

    //Llamar a todos los Pokemones
    const globalgetAllPokemons = async () => {
        const baseUrl = 'http://localhost:4000/'
        const res = await fetch(`${baseUrl}api/pokemon`);
        const results = await res.json()
        console.log(results)
        setGlobalAllPokemons(results) 
        setLoading(false)
    }

    //Llamar a un pokemón por ID
    const getPokemonById = async (id :number) => {
        const baseUrl = 'http://localhost:4000/'
        const res = await fetch(`${baseUrl}api/pokemon/${id}`)
        const results = await res.json()
        return results
    }


    useEffect(() => {
        getAllPokemons()
    }, [])

    useEffect(() => {
        globalgetAllPokemons()
    }, [])


    return (
        <PokemonContext.Provider value={{
            numero:0
        }} >
            {children}
        </PokemonContext.Provider>
    );
}