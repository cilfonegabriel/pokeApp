import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterBar from '../components/FilterBar';
import { PokemonContext } from '../context/PokemonContext';

// Mock del contexto para poder probar el componente FilterBar
const mockContext = {
    active: true,
    handleCheckbox: jest.fn(), // Mock de la función handleCheckbox
};

describe('FilterBar', () => {
    it('renders FilterBar correctly', () => {
        const { getByText } = render(
            <PokemonContext.Provider value={mockContext}>
                <FilterBar />
            </PokemonContext.Provider>
        );

        // Verifica que el componente se renderice correctamente
        expect(getByText('Tipo')).toBeInTheDocument();

        // Verifica que se rendericen los tipos de Pokémon
        expect(getByText('Grass')).toBeInTheDocument();
        expect(getByText('Fire')).toBeInTheDocument();
        // Agrega más expectativas para otros tipos si lo deseas
    });

    it('calls handleCheckbox function when a checkbox is clicked', () => {
        const { getByLabelText } = render(
            <PokemonContext.Provider value={mockContext}>
                <FilterBar />
            </PokemonContext.Provider>
        );

        // Simula hacer clic en un checkbox
        fireEvent.click(getByLabelText('Grass'));

        // Verifica que la función handleCheckbox haya sido llamada
        expect(mockContext.handleCheckbox).toHaveBeenCalledWith(expect.any(Object)); // Puedes ajustar el parámetro esperado según tu implementación
    });
});
