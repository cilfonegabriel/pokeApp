import { Router } from "express";
import { pokemonListRouter } from "./handlers/pokemonsRoute";
import { getPokemonById } from "./handlers/pokemonDetails";

const router = Router();

router.get('/api/pokemon', pokemonListRouter)  
router.get('/api/pokemon/:id', getPokemonById);

export default router;