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
            <div className="flex gap-10 ml-15 mx-5" key={type}>
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
    <div className={`fixed top-0 left-0 w-40 bg-gray-200 h-full overflow-y-auto pt-32 transition-all duration-500 ${active ? 'active-class' : ''}`}>
      <div className='flex flex-col gap-20" text-base'>
             <span className="flex flex-col gap-20 text-base mx-10 font-bold">
                Tipo
            </span>
                {renderPokemonTypes()}
        </div>
    </div>
    );
};

export default FilterBar;
