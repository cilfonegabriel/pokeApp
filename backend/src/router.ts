import { Router } from "express";
import { pokemonListRouter } from "./handlers/pokemonsRoute";
import { getPokemonById } from "./handlers/pokemonDetails";
import { errorHandler } from "./middlewares/errorHandler";

const router = Router();

router.get('/api/pokemon', pokemonListRouter)  
router.get('/api/pokemon/:id',errorHandler, getPokemonById);

export default router;