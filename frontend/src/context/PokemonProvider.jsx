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

    const [filteredPokemons, setFilteredPokemons] = useState([])
  
    const getAllPokemons = async (limit = 20) => {
        const baseUrl = 'http://localhost:4000/';
        try {
          const res = await fetch(`${baseUrl}api/pokemon/?limit=${limit}&offset=${offset}`);
          const { data: pokemonData } = await res.json();
          const results = Object.values(pokemonData);
          
        setAllPokemons([...allPokemons, ...results]);;
          setLoading(false);
        } catch (error) {
          console.error('Error fetching Pokemon data:', error);
        }
      }
  
      const globalgetAllPokemons = async () => {
        const baseUrl = 'http://localhost:4000/';
        try {
          const res = await fetch(`${baseUrl}api/pokemon`);
          const { data: pokemonData } = await res.json();
          const results = Object.values(pokemonData);
          setGlobalAllPokemons(results);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching all Pokemon data:', error);
        }
      }
  
    const getPokemonById = async (id) => {
      const baseUrl = 'http://localhost:4000/';
      const res = await fetch(`${baseUrl}api/pokemon/${id}`);
      const results = await res.json();
      return results;
    }
  
    useEffect(() => {
      getAllPokemons();
    }, [offset]);
  
    useEffect(() => {
      globalgetAllPokemons();
    }, []);

    const onClickLoadMore = () => {
      setOffset(offset + 20);
    };

  // Filter Function + State
	const [typeSelected, setTypeSelected] = useState({
		grass: false,
		normal: false,
		fighting: false,
		flying: false,
		poison: false,
		ground: false,
		rock: false,
		bug: false,
		ghost: false,
		steel: false,
		fire: false,
		water: false,
		electric: false,
		psychic: false,
		ice: false,
		dragon: false,
		dark: false,
		fairy: false,
		unknow: false,
		shadow: false,
	});

  
  const handleCheckbox = e => {
    setTypeSelected({
        ...typeSelected,
        [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
        const filteredResults = globalAllPokemons.filter(pokemon =>
            pokemon.type.includes(e.target.name)
        );
        setFilteredPokemons([...filteredPokemons, ...filteredResults]);
    } else {
        const filteredResults = filteredPokemons.filter(
            pokemon => !pokemon.type.includes(e.target.name)
        );
        setFilteredPokemons([...filteredResults]);
    }
};


    return (
      <PokemonContext.Provider value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalAllPokemons,
        getPokemonById,
        onClickLoadMore,
        loading,
        setLoading,
        active,
        setActive,
        handleCheckbox,
        filteredPokemons
      }} >
        {children}
      </PokemonContext.Provider>
    );
  }