import React, { useState, useEffect, useContext } from 'react';
import { PokemonContext } from "../context/PokemonContext"
import { useLocation } from "react-router-dom"
import { CardPokemon } from '../components/CardPokemon';

const SearchPage = () => {
  const location = useLocation();
  const { globalAllPokemons } = useContext(PokemonContext);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSearchTerm(location.state ? location.state.toLowerCase() : '');
  }, [location.state]);

  const filteredPokemons = globalAllPokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm)
  );
  
  return (
    <div className='max-w-7xl mx-auto'>
      <p className='mb-8 text-2xl'>
        Se encontraron <span>{filteredPokemons.length}</span> Resultados
      </p>

      <div className='grid grid-cols-4 gap-20 max-w-screen-lg mx-auto'>
        {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
    </div>
  );
}

export default SearchPage;
