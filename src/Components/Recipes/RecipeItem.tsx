import {Recipe } from "../../../Util/http"
import prep from '../../assets/Images/Scale/icon-prep-time.svg';
import cook from '../../assets/Images/Scale/icon-cook-time.svg';
import servings from '../../assets/Images/Scale/icon-servings.svg';


type Prop = {
    recipe: Recipe
}

const RecipeItem = ({recipe}: Prop) => {
    return (
            <article
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
                >
                      {/* Image */}
                    <img
                    src={`http://localhost:5173/${recipe.image.large}`}
                    alt={recipe.title}
                    className="sm:h-[50%] w-full object-cover"
                    />

                   {/* Content */}
                   <div className="pt-4 px-5 flex flex-col items-start gap-5 text-left ">
                        <h3 className="text-[20px] sm:text-[18px] font-extrabold text-evergreen-900">
                            {recipe.title}
                        </h3>

                        <p className="text-md font-semibold text-evergreen-600">
                            {recipe.overview}
                        </p>

                              {/* Meta */}
                        <div className="flex flex-wrap gap-3 text-xs text-evergreen-900">
                            <span className='text-sm'> <img src={servings} alt='serving icon' className='inline-block w-5 h-5 mr-0.5'  /> Servings: {recipe.servings} servings</span>
                            <span className='text-sm'> <img src={prep} alt='prepping icon' className='inline-block w-5 h-5 mr-0.5' /> Prep: {recipe.prepMinutes} mins</span>
                            <span className='text-sm'> <img src={cook} alt='cooking icon' className='inline-block w-5 h-5 mr-0.5' /> Cook: {recipe.cookMinutes} mins</span>
                        </div>

                              {/* Button */}
                        <button className="w-full rounded-md bg-evergreen-900 py-2 text-sm font-bold text-white hover:text-orange-500">
                            View Recipe
                        </button>
                    </div>
                </article>
    )
}

export default RecipeItem
