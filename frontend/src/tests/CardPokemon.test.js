import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CardPokemon } from '../components/CardPokemon';

const pokemonMock = {
  id: 1,
  name: 'Bulbasaur',
  image: 'bulbasaur.png',
  type: ['grass', 'poison']
};

describe('CardPokemon', () => {
  it('renders pokemon details correctly', () => {
    render(
      <Router>
        <CardPokemon pokemon={pokemonMock} />
      </Router>
    );

    const pokemonName = screen.getByText('Bulbasaur');
    const pokemonNumber = screen.getByText('N° 1');
    const type1 = screen.getByText('grass');
    const type2 = screen.getByText('poison');
    const pokemonImage = screen.getByAltText('Pokemon Bulbasaur');

    expect(pokemonName).toBeInTheDocument();
    expect(pokemonNumber).toBeInTheDocument();
    expect(type1).toBeInTheDocument();
    expect(type2).toBeInTheDocument();
    expect(pokemonImage).toBeInTheDocument();
    expect(pokemonImage).toHaveAttribute('src', 'bulbasaur.png');
  });

  it('renders correct type color', () => {
    render(
      <Router>
        <CardPokemon pokemon={pokemonMock} />
      </Router>
    );

    const type1 = screen.getByText('grass');
    const type2 = screen.getByText('poison');

    expect(type1).toHaveClass('bg-green-900');
    expect(type2).toHaveClass('bg-purple-900');
  });

  it('redirects to correct pokemon details page when clicked', () => {
    const { container } = render(
      <Router>
        <CardPokemon pokemon={pokemonMock} />
      </Router>
    );

    const card = container.querySelector('.card-pokemon');
    expect(card).toHaveAttribute('href', '/pokemon/1');
  });
});
