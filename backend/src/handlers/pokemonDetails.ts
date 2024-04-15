import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Stat {
    base_stat: number;
    stat: {
        name: string;
    };
}

interface Type {
    slot: number;
    type: {
        name: string;
    };
}

interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    stats: Stat[];
    type: Type;
}

const baseUrl = 'https://pokeapi.co/api/v2';

export const getPokemonById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const response: AxiosResponse<Pokemon> = await axios.get(`${baseUrl}/pokemon/${id}`);

        const pokemonData: Pokemon = response.data;

        // Creamos un objeto vacío para almacenar las estadísticas
        const stats: { [key: string]: number } = {};

        // Iteramos sobre las estadísticas y las asignamos al objeto
        pokemonData.stats.forEach(stat => {
            stats[stat.stat.name] = stat.base_stat;
        });

        const pokemon = {
            id: pokemonData.id,
            name: pokemonData.name,
            height: pokemonData.height,
            weight: pokemonData.weight,
            stats: stats,
            type: pokemonData.type
        };

        res.json(pokemon);
    } catch (error) {
        console.log(error);
    }
};
