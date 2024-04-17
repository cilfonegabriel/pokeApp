import React from 'react';
import { Link } from 'react-router-dom';

export const CardPokemon = ({ pokemon }) => {
    return (
        <Link 
          to={`/pokemon/${pokemon.id}`} 
          className='bg-white shadow-lg rounded-lg overflow-hidden card-pokemon hover:shadow-xl transition duration-300 ease-in-out'
        >
            <div className='bg-gray-200 flex items-center justify-center rounded-t-lg h-48 w-full'>
                <img
                    src={pokemon.image}
                    alt={`Pokemon ${pokemon.name}`}
                    className='h-full w-auto object-cover'
                    style={{ maxHeight: '100%' }}
                />
            </div>
            <div className='p-4'>
                <span className='block text-gray-600 text-sm'>N° {pokemon.id}</span>
                <h3 className='text-2xl font-semibold text-gray-800 mb-2'>{pokemon.name}</h3>
                <div className='flex flex-wrap gap-2 mt-4'>
                    {pokemon.type.map((type, index) => (
                        <span key={index} className={`text-xs py-1 px-3 rounded-md text-white ${getTypeColorClass(type)}`}>
                            {type}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

// Función para obtener la clase de color basada en el tipo de Pokémon
const getTypeColorClass = (type) => {
  switch (type) {
      case 'grass':
          return 'bg-green-900';
      case 'poison':
          return 'bg-purple-900';
      case 'fire':
          return 'bg-red-600';
      case 'water':
          return 'bg-blue-900';
      case 'flying':
          return 'bg-blue-800'; // Azul oscuro para tipo flying
      case 'bug':
          return 'bg-green-500'; // Verde oscuro para tipo bug
      case 'normal':
          return 'bg-black'; // Negro para tipo normal
      case 'electric':
          return 'bg-yellow-500';
      case 'ground':
            return 'bg-gray-500'; // Gris para tipo ground // Amarillo fuerte para tipo electric
      case 'fairy':
          return 'bg-orange-500'; // Naranja para tipo fairy
      default:
          return 'bg-gray-500';
  }
};
