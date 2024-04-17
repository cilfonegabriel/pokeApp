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
    type: string[];
}


const baseUrl: string = 'https://pokeapi.co/api/v2';

export const ListPokemon = async (req: Request, res: Response): Promise<void> => {
    try {
        const limit = typeof req.query.limit === 'string' ? parseInt(req.query.limit) : 200;
        const offset = typeof req.query.offset === 'string' ? parseInt(req.query.offset) : 0;
        

        const response: AxiosResponse = await axios.get(`${baseUrl}/pokemon?offset=${offset}&limit=${limit}`);
        const pokemonDataList: PokemonData[] = response.data.results;

        const pokemonObject: { [key: number]: Pokemon } = {};

        for (const item of pokemonDataList) {
            const { data: pokemonData }: AxiosResponse = await axios.get(item.url);
            const type: string[] = pokemonData.types.map((type: { type: { name: string } }) => type.type.name);
            
            const pokemon: Pokemon = {
                id: pokemonData.id,
                name: pokemonData.name,
                type: type,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`
            };
            pokemonObject[pokemon.id] = pokemon;
        }

        res.json({ data: pokemonObject });
    } catch (error) {
        console.error(error);
    }
};
