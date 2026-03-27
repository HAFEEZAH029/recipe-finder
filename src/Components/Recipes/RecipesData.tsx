import { useState } from 'react';
import {fetchRecipes} from '../../../Util/http';
import { useQuery } from '@tanstack/react-query';
import chevron from '../../assets/Images/Scale/icon-chevron-down.svg';
import magnify from '../../assets/Images/Scale/icon-search.svg';
import RecipeItem from './RecipeItem';



export default function RecipesData () {
    const {data, isPending, isError} = useQuery({
        queryKey: ['recipe'],
        queryFn: fetchRecipes,
        staleTime:10000
    });
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [maxPrep, setMaxPrep] = useState<string>("");
    const [maxCook, setMaxCook] = useState<string>("");


    const filteredRecipes = data?.filter(recipe => {

        const searchValue = searchTerm  !== ""
        ? recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm.toLowerCase())) :
        true

        const MaxPrep = maxPrep  !== ""
        ? recipe.prepMinutes <= Number(maxPrep):
        true

        const MaxCook = maxCook  !== ""
        ? recipe.cookMinutes <= Number(maxCook):
        true

        return searchValue && MaxPrep && MaxCook
    });

    let prepTime = ["5", "10", "15"];
    let cookTime = ["5", "10", "15", "20", "25"];

    return (
        <section className="flex items-center justify-center mb-12 mx-auto max-w-6xl">
          <div>
                {/* 🔽 FILTERS */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* prep and cook time*/}
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">

                       {/* Prep Time */}
                    <div className='relative'>
                        <details className="group">
                            <summary className="cursor-pointer list-none rounded-lg border bg-white px-4 py-2 text-xl sm:text-[9px] md:text-sm">
                                {maxPrep !== "" ? `${maxPrep} mins prep` : "Max Prep Time"}
                                <img src={chevron} alt='chevron' className='inline-block ml-5 sm:w-3.5 sm:h-3.5' />
                            </summary>

                            <div className="absolute animate-slideDown z-10 mt-2 w-48 text-left rounded-xl border bg-white p-3 shadow-md">

                                {prepTime.map((time, index) => (
                                <label key={index} className="flex items-center gap-2 py-1 text-sm">
                                    <input
                                    type="radio"
                                    name="prep"
                                    checked={maxPrep === time}
                                    onChange={() => setMaxPrep(time)}
                                    />
                                        {time} minutes
                                </label>))}

                                  {/* Clear Button */}
                                <button
                                    onClick={() => setMaxPrep("")}
                                    className="mt-2 text-md text-evergreen-600 hover:text-red-600"
                                >
                                      Clear
                                </button>
                            </div>
                        </details>
                    </div>

                       {/* Cook Time */}
                    <div className='relative'>
                        <details className="group">
                            <summary className="cursor-pointer list-none rounded-lg border bg-white px-4 py-2 text-xl sm:text-[9px] md:text-sm">
                                {maxCook !== "" ? `${maxCook} mins cook` : "Max Cook Time"}
                                <img src={chevron} alt='chevron' className='inline-block ml-5 sm:w-3.5 sm:h-3.5' />
                            </summary>

                            <div className="absolute animate-slideDown z-10 mt-2 w-48 rounded-xl text-left border bg-white p-3 shadow-md">

                                {cookTime.map((time, index) => (
                                <label key={index} className="flex items-center gap-2 py-1 text-sm">
                                    <input
                                    type="radio"
                                    name="cook"
                                    checked={maxCook === time}
                                    onChange={() => setMaxCook(time)}
                                    />
                                        {time} minutes
                                </label>))}

                                  {/* Clear Button */}
                                <button
                                    onClick={() => setMaxCook("")}
                                    className="mt-2 text-md text-evergreen-600 hover:text-red-600"
                                >
                                      Clear
                                </button>
                            </div>
                        </details>
                    </div>
                </div>

                   {/* Search */}
                <div className='relative w-full sm:w-65'>
                    <img src={magnify} alt='search icon' className='absolute bottom-3 ml-1.5 w-4 h-4 opacity-50 ' />
                    <input
                        type="text"
                        placeholder="Search by name or ingredient..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full rounded-lg border border-gray-200 bg-white px-6.5 py-2 text-sm sm:max-w-xs"
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
                    No recipe found.
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