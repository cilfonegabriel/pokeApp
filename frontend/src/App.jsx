import AppRouter from "./AppRouter"
import { PokemonProvider } from "./context/PokemonProvider";

export default function App() {
  return (
    <PokemonProvider>
      <AppRouter />
    </PokemonProvider>
  )
}
