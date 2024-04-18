import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const FilterBar = () => {
    const { active, handleCheckbox } = useContext(PokemonContext);

    // Array de tipos de Pokémon
    const pokemonTypes = [
        ' Planta ', ' Fuego ', ' Bicho ', ' Hada ', ' Dragón ',
        ' Fantasma ', ' Tierra ', ' Normal ', ' Psíquico ',
        ' Acero ', ' Siniestro ', ' Eléctrico ', ' Lucha ',
        ' Volador ', ' Hielo ', ' Veneno ', ' Roca ', ' Agua '
    ];

    // Función para renderizar los elementos de tipo de Pokémon
    const renderPokemonTypes = () => {
        return pokemonTypes.map((type) => (
            <div className='group-type' key={type}>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name={type.toLowerCase()}
                    id={type.toLowerCase()}
                />
                <label htmlFor={type.toLowerCase()}>{type}</label>
            </div>
        ));
    };

    return (
      <div className={`container-filters ${active ? 'active' : ''} fixed top-0 left-0 w-40 bg-gray-200 h-full overflow-y-auto pt-32 transition-all duration-300`}>
      <div className='filter-by-type text-base'>
                <span>Tipo</span>
                {renderPokemonTypes()}
            </div>
        </div>
    );
};

export default FilterBar;
