import { Router } from "express";
import { pokemonListRouter } from "./handlers/pokemonsRoute";
import { getPokemonById } from "./handlers/pokemonDetails";
import { errorHandler } from "./middlewares/errorHandler";

const router = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Stat:
 *       type: object
 *       properties:
 *         base_stat:
 *           type: number
 *         stat:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *       required:
 *         - base_stat
 *         - stat
 * 
 *     Type:
 *       type: object
 *       properties:
 *         slot:
 *           type: number
 *         type:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *       required:
 *         - slot
 *         - type
 * 
 *     Pokemon:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 *         height:
 *           type: number
 *         weight:
 *           type: number
 *         stats:
 *           type: object
 *           additionalProperties:
 *             type: number
 *         type:
 *           $ref: '#/components/schemas/Type'
 *       required:
 *         - id
 *         - name
 *         - height
 *         - weight
 *         - stats
 *         - type
 */

/**
 * @swagger
 * /api/pokemon/{id}:
 *   get:
 *     summary: Get details of a Pokemon by ID
 *     tags:
 *       - Pokemon
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: ID of the Pokemon to get
 *     responses:
 *       '200':
 *         description: Successful response, returns details of the requested Pokemon
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       '404':
 *         description: Pokemon not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /api/pokemon:
 *   get:
 *     summary: Get a list of Pokemons
 *     tags:
 *       - Pokemon
 *     responses:
 *       '200':
 *         description: Successful response, returns a list of Pokemons
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   additionalProperties:
 *                     $ref: '#/components/schemas/Pokemon'
 */

router.get('/api/pokemon', pokemonListRouter)  
router.get('/api/pokemon/:id' ,errorHandler, getPokemonById);

export default router;