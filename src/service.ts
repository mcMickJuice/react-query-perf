import axios from "axios";

export async function getPokemon(url: string) {
  const result = await axios.get(url);

  return result.data;
}
