import { fetchRecipes, fetchRecipesBySlug } from "../../Util/http";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import prep from '../assets/Images/Scale/icon-prep-time.svg';
import cook from '../assets/Images/Scale/icon-cook-time.svg';
import servings from '../assets/Images/Scale/icon-servings.svg';
import bullet from '../assets/Images/Scale/icon-bullet-point.svg';
import RecipeItem from "../Components/Recipes/RecipeItem";



const RecipeDetails = () => {
   const {slug} =useParams();
   const {data:recipe, isLoading, isError} = useQuery({
    queryKey: ["recipeDeets", slug],
    queryFn: () => fetchRecipesBySlug(slug!), //the ! is use to shut typescript and asssure that slug CANNOT be null, else will will get a warning that it could be undefined
    enabled: !!slug //this means => only run this query if slug is true
   })

   const {data:recipes, isLoading:isRecipesLoading, isError:isRecipesError} = useQuery({
    queryKey: ["recipe"],
    queryFn: fetchRecipes
   })

   const moreRecipes = recipes?.filter(recipe => recipe.slug !== slug).slice(0,3);

  return (
    <section className="bg-[#f8f4ed] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* 🔙 Breadcrumb */}
        <p className="text-[18px] text-left mb-6 ">
          Recipes / <span className="text-evergreen-900 font-bold">{recipe?.title}</span>
        </p>

        {isLoading && (
            <p className="mt-10 text-center text-xl text-evergreen-600">
                    Loading recipe...
            </p>
        )}

        {isError && (
            <p className="mt-10 text-center text-xl text-red-600">
                    Failed to load recipe detail
            </p>
        )}

        {/* 🧩 MAIN LAYOUT */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* IMAGE */}
          <div>
            <img
              src={`http://localhost:5173/${recipe?.image.large}`}
              alt={recipe?.title}
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* CONTENT */}
          <div>
            <h1 className="text-3xl text-left font-extrabold text-evergreen-900">
              {recipe?.title}
            </h1>

            <p className="mt-3 text-[16px] text-left font-bold text-evergreen-900">
              {recipe?.overview}
            </p>

            {/* META */}
            <div className="flex flex-wrap gap-3 mt-4 text-xs text-evergreen-900">
                <span className='text-sm'> <img src={servings} alt='serving icon' className='inline-block w-5 h-5 mr-0.5'  /> Servings: {recipe?.servings} servings</span>
                <span className='text-sm'> <img src={prep} alt='prepping icon' className='inline-block w-5 h-5 mr-0.5' /> Prep: {recipe?.prepMinutes} mins</span>
                <span className='text-sm'> <img src={cook} alt='cooking icon' className='inline-block w-5 h-5 mr-0.5' /> Cook: {recipe?.cookMinutes} mins</span>
            </div>

            {/* INGREDIENTS */}
            <div className="mt-6 text-left">
              <h2 className="text-xl font-extrabold text-evergreen-900">Ingredients:</h2>
              <ul className="mt-2 space-y-1 text-sm text-evergreen-900">
                {recipe?.ingredients.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-4 sm:gap-6">
                    <img src={bullet} alt="bullet point" className="" /> 
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* INSTRUCTIONS */}
            <div className="mt-6 text-left">
              <h2 className="text-xl font-extrabold text-evergreen-900">Instructions:</h2>
              <ul className="mt-2 space-y-2 text-sm text-[#4f5f5b]">
                {recipe?.instructions.map((step: string, i: number) => (
                  <li key={i} className="flex items-center gap-4 sm:gap-6">
                    <img src={bullet} alt="bullet point" className="" />
                    <p>{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="text-lg font-bold text-evergreen-900 mb-6">
            More recipes
          </h2>

          {isRecipesLoading && (
            <p className="mt-10 text-center text-xl text-evergreen-600">
                    Loading recipes...
            </p>
          )}

          {isRecipesError && (
            <p className="mt-10 text-center text-xl text-red-600">
                    Could not load more recipes
            </p>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {moreRecipes?.map((item) => (
              <RecipeItem key={item.id} recipe={item} />
            ))}
          </div>
        </div>

     </div>
    </section>
)}

export default RecipeDetails
