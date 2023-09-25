import "./styles.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PokemonPage } from "./PokemonPage";

const queryClient = new QueryClient();

function range(num: number) {
  return Array.from({ length: num }, (idx) => idx);
}

const PokemonApp = () => {
  return (
    <div className="App">
      {range(1000).map((_, idx) => {
        return <PokemonPage id="1" key={idx} />;
      })}
    </div>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonApp />
    </QueryClientProvider>
  );
}
