import  { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

const POKEAPI_BASE_URL: string =  'https://pokeapi.co/api/v2';


export const pokemonListRouter = async (req: Request , res: Response) => {
    try {
        const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon?offset&limit=60`)
        const data = response.data.results.slice(0,60);
    

        const pokemonList = [];
        for (const item of data) {
            const { data: pokemonData } : AxiosResponse = await axios.get(item.url);

            const pokemon = {
                id: pokemonData.id,
                name: pokemonData.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`
            };

            pokemonList.push(pokemon);
        }

        res.json(pokemonList);
    } catch (error) {
        console.log(error);
    }
}

