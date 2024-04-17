import React from 'react';
import { PokemonList } from '../components/PokemonList';

const HomePage = () => {
    return (
        <>
            <div className="container-filter container">
                <div className="icon-filter flex items-center gap-3 mb-5 cursor-pointer">
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='icon w-8 h-8'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                        />
                    </svg>
                    <span>Filtrar</span>
                </div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <PokemonList />
            </div>
        </>
    );
};

export default HomePage;
