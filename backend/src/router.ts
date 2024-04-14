import { Router } from "express";
import { pokemonListRouter } from "./handlers/pokemonsRoute";

const router = Router();

router.get('/api/pokemons', pokemonListRouter)  

export default router;