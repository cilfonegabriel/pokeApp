import React, { useContext } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';


  export const Navigation = () => {
    const { onInputChange, valueSearch, onResetForm } =
      useContext(PokemonContext);

    const navigate = useNavigate();

    const onSearchSubmit = e => {
      e.preventDefault();
      navigate('/search', {
        state: valueSearch,
      });
      onResetForm();
    };

  return (
    <>
      <header className='container mx-10 flex items-center justify-between py-10'>
        <Link to='/' className='logo'>
          <img
            src='https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png'
            alt='Logo Pokedex'
            className='w-48 lg:w-64'
          />
        </Link>

        <form onSubmit={onSearchSubmit} className='flex flex-wrap items-center gap-4'>
          <div className='form-group flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-lg'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-5 h-5 text-gray-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
            <input
              type='search'
              name='valueSearch'
              id=''
              value={valueSearch}
              onChange={onInputChange}
              placeholder='Buscar nombre de pokemon'
              className='w-full sm:w-72 py-2 px-2 outline-none text-gray-800 rounded-lg'
            />
          </div>

          <button className='btn-search bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg'>
            Buscar
          </button>
        </form>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;