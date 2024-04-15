import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

interface PokemonData {
    id: number;
    name: string;
    url: string;
}

interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

const baseUrl: string = 'https://pokeapi.co/api/v2';

//Llamar solo 100 pokemones.
export const pokemonListRouter = async (req: Request, res: Response): Promise<void> => {
    try {
        const response: AxiosResponse = await axios.get(`${baseUrl}/pokemon?offset=0&limit=100`);
        const pokemonDataList: PokemonData[] = response.data.results;

        const pokemonObject: { [key: string]: Pokemon } = {};

        for (const item of pokemonDataList) {
            const { data: pokemonData }: AxiosResponse = await axios.get(item.url);
            const type: string = pokemonData.types[0].type.name;
            const pokemon: Pokemon = {
                id: pokemonData.id,
                name: pokemonData.name,
                type: type,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`
            };
            pokemonObject[pokemon.name] = pokemon;
        }
        res.json(pokemonObject);
    } catch (error) {
        console.error(error);
    }
};
