import { useEffect, useState } from 'react';
import {fetchRecipes} from '../../../Util/http';
import { useQuery } from '@tanstack/react-query';
import magnify from '../../assets/Images/Scale/icon-search.svg';
import RecipeItem from './RecipeItem';
import Dropdown from '../Dropdown';



export default function RecipesData () {
    const {data, isPending, isError} = useQuery({
        queryKey: ['recipe'],
        queryFn: fetchRecipes,
        staleTime:10000
    });
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [debouncedSearch, setDebouncedSearch] = useState<string>(searchTerm);
    const [maxPrep, setMaxPrep] = useState<number | null>(null);
    const [maxCook, setMaxCook] = useState<number | null>(null);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(searchTerm);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const filteredRecipes = data?.filter(recipe => {

        const searchValue = debouncedSearch  !== null
        ? recipe.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(debouncedSearch.toLowerCase())) :
        true

        const MaxPrep = maxPrep  !== null
        ? recipe.prepMinutes <= Number(maxPrep):
        true

        const MaxCook = maxCook  !== null
        ? recipe.cookMinutes <= Number(maxCook):
        true

        return searchValue && MaxPrep && MaxCook
    });

    const prepTime = [5, 10, 15];
    const cookTime = [5, 10, 15, 20, 25];

    return (
                <section className="flex items-center justify-center mb-12 mx-auto max-w-6xl" aria-labelledby="recipes-data-heading">
                    <h2 id="recipes-data-heading" className="sr-only">Recipe Filters and List</h2>
                    <div>
                {/* 🔽 FILTERS */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" aria-label="Recipe filters">
                    {/* prep and cook time*/}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">

                       {/* Prep Time */}
                    <Dropdown
                       options={prepTime}
                       value={maxPrep}
                       setValue={setMaxPrep}
                       label="Max Prep Time"
                       name="prep"
                       formatLabel={(v) => `Prep ≤ ${v} mins`}
                    />

                       {/* Cook Time */}
                    <Dropdown
                       options={cookTime}
                       value={maxCook}
                       setValue={setMaxCook}
                       label="Max Cook Time"
                       name="cook"
                       formatLabel={(v) => `Cook ≤ ${v} mins`}
/>
                </div>

                   {/* Search */}
                <div className='relative w-full sm:w-65'>
                    <img src={magnify} alt='' aria-hidden="true" className='absolute bottom-3 ml-1.5 w-4 h-4 opacity-50 ' />
                    <input
                        type="text"
                        placeholder="Search by name or ingredient..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-white px-6.5 py-2 text-sm sm:max-w-xs"
                        aria-label="Search recipes by name or ingredient"
                    />
                </div>
            </div>

            {isPending && (
               <p className="mt-10 text-center text-xl text-evergreen-600">
                    Loading recipes...
                </p>
            )}

            {isError && (
               <p className="mt-10 text-center text-xl text-red-600">
                    Failed to load recipes.
                </p>
            )}

            {data && filteredRecipes?.length === 0 && (
               <p className="mt-10 text-center text-xl text-evergreen-600">
                    No recipes found.
                </p>
            )}

                {/** RECIPES */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRecipes?.map((recipe) => (
                 <RecipeItem key={recipe.id} recipe={recipe} />
                ))}
            </div>

          </div>
        </section>
    )
}