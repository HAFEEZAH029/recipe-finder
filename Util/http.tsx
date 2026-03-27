
export type Param = {
  'large': string
  'small': string
}

export type Recipe = {
  id: string;
  title: string;
  slug: string;
  overview: string;
  image: Param;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
};

export const fetchRecipes = async (): Promise<Recipe[]> => {
 await new Promise(resolve => setTimeout(resolve, 1000));
  const res = await fetch("/data.json");

  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
  }

  const data:Recipe[] = await res.json();
  return data;
};