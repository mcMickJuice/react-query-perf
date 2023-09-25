import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "./service";
import "./PokemonPage.css";

export const PokemonPage = ({ id }: { id: string }) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(url)
  });

  if (isLoading) return <div>Is Loading</div>;

  return (
    <div className="root">
      <div className="poke-name">{data.name}</div>
      <img src={data.sprites.front_default} alt={data.name} />
    </div>
  );
};
