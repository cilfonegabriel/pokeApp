import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { firstMay } from "../helpers/helper";

const PokemonPage = () => {
  const { getPokemonById } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();

  const fetchPokemon = async (id) => {
    try {
      const { data } = await getPokemonById(id);
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon(id);
  }, [id]);
  console.log(pokemon)

  return (
    <main className="flex flex-col items-center justify-center mx-auto mb-10 lg:mb-50 px-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="mt-10 lg:mt-20 flex flex-col mx-auto lg:flex-row items-center relative">
            <span className="absolute top-0 left-0 -mt-20 lg:-mt-0 text-6xl font-bold text-primary-hover">
              #{pokemon.id}
            </span>
            <div className="order-2 flex-shrink-0 p-6 pr-0 lg:h-50">
              <img
                className="h-48 w-48 lg:h-auto lg:w-64"
                src={pokemon.image}
                alt={`Pokemon ${pokemon?.name}`}
              />
            </div>
            <div className="flex flex-col order-1 lg:order-none lg:flex-1">
              <h1 className="text-center lg:text-right text-3xl lg:text-5xl">{firstMay(pokemon.name)}</h1>
              <div className="flex flex-col lg:flex-row justify-center lg:justify-between mt-4 lg:mt-20">
                <div className="flex flex-col gap-4 items-center">
                  <p className="font-bold text-lg lg:text-2xl">Altura</p>
                  <span>{pokemon.height}</span>
                </div>
                <div className="flex flex-col gap-4 items-center mt-4 lg:mt-0">
                  <p className="font-bold text-lg lg:text-2xl">Peso</p>
                  <span>{pokemon.weight}KG</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 lg:mt-10">
            <h1 className="text-center lg:text-left text-2xl lg:text-3xl font-bold mb-4">Estadísticas</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
              {Object.entries(pokemon.stats).map(([stat, value]) => (
                <div key={stat} className="flex flex-col lg:flex-row items-center gap-2 lg:gap-5">
                  <span className="font-medium text-lg">{`${stat}:`}</span>
                  <div className="w-full h-3 bg-blue-500 rounded-lg"></div>
                  <span className="font-medium text-lg">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}  

export default PokemonPage;
