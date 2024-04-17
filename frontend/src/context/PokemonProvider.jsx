import { useEffect, useState, ReactNode } from "react"
import {useForm} from "../hook/useForm"
import { PokemonContext } from "./PokemonContext"

export const PokemonProvider = ({ children }) => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [globalAllPokemons, setGlobalAllPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const { formState: { valueSearch }, onInputChange, onResetForm } = useForm({ valueSearch: '' });
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
  
    const getAllPokemons = async (limit = 50) => {
        const baseUrl = 'http://localhost:4000/';
        try {
          const res = await fetch(`${baseUrl}api/pokemon/?limit=${limit}&offset=${offset}`);
          const { data: pokemonData } = await res.json();
          const results = Object.values(pokemonData);
          console.log(results);
          

          setAllPokemons([...allPokemons, ...results]);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching Pokemon data:', error);
        }
      }
  
    const globalgetAllPokemons = async () => {
      const baseUrl = 'http://localhost:4000/';
      const res = await fetch(`${baseUrl}api/pokemon`);
      const results = await res.json();
      setGlobalAllPokemons(results);
      setLoading(false);
    }
  
    const getPokemonById = async (id) => {
      const baseUrl = 'http://localhost:4000/';
      const res = await fetch(`${baseUrl}api/pokemon/${id}`);
      const results = await res.json();
      return results;
    }
  
    useEffect(() => {
      getAllPokemons();
    }, []);
  
    useEffect(() => {
      globalgetAllPokemons();
    }, []);
  
    return (
      <PokemonContext.Provider value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalAllPokemons,
        getPokemonById
      }} >
        {children}
      </PokemonContext.Provider>
    );
  }