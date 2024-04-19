import React, { useContext } from 'react';
import { PokemonList } from '../components/PokemonList';
import FilterBar from '../components/FilterBar';
import { PokemonContext } from '../context/PokemonContext';

const HomePage = () => {
    const { onClickLoadMore, active, setActive } = useContext(PokemonContext);

    return (
        <>
            <div className="flex items-center max-w-7xl justify-end  ">
                <div className="flex items-center gap-15 mb-20 cursor-pointer" onClick={() => setActive(!active)}>
                    <svg
                        className= "w-6 h-6 text-gray-500"
                        xmlns='http://www.w3.org/2000/svg'
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
                        />
                    </svg>
                    <span>Filtrar Tipo</span>
                </div>
            </div>
                <PokemonList />

            {active && <FilterBar />}
            
            <div className="flex justify-center mb-20 mt-20 max-w-7xl mx-auto">
                <button className="bg-green-500 text-white rounded-lg py-3 px-10 border-none cursor-pointer" onClick={onClickLoadMore}>
                    Cargar más
                </button>
            </div>
        </>
    );
};

export default HomePage;
