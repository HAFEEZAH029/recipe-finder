import {Recipe } from "../../../Util/http"
import prep from '../../assets/Images/Scale/icon-prep-time.svg';
import cook from '../../assets/Images/Scale/icon-cook-time.svg';
import servings from '../../assets/Images/Scale/icon-servings.svg';
import { Link } from "react-router-dom";
import { motion } from "motion/react";


type Prop = {
    recipe: Recipe
}

const RecipeItem = ({recipe}: Prop) => {
    return (
            <article
                className="overflow-hidden rounded-2xl bg-white shadow-sm cursor-pointer transition hover:shadow-md"
                aria-labelledby={`recipe-title-${recipe.id}`}
            >
                {/* Image */}
                <img
                    src={recipe.image.large}
                    alt={`Photo of ${recipe.title}`}
                    className="sm:h-[50%] w-full object-cover"
                />

                {/* Content */}
                <div className="pt-4 px-5 flex flex-col items-start gap-5 text-left ">
                    <h3 id={`recipe-title-${recipe.id}`} className="text-[20px] sm:text-[18px] font-extrabold text-evergreen-900">
                        {recipe.title}
                    </h3>

                    <p className="text-md font-semibold text-evergreen-600">
                        {recipe.overview}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-3 text-xs text-evergreen-900">
                        <span className='text-sm'> <motion.img src={servings} alt='' aria-hidden="true" className='inline-block w-5 h-5 mr-0.5' animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}  /> Servings: {recipe.servings} servings</span>
                        <span className='text-sm'> <motion.img src={prep} alt='' aria-hidden="true" className='inline-block w-5 h-5 mr-0.5' animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}  /> Prep: {recipe.prepMinutes} mins</span>
                        <span className='text-sm'> <motion.img src={cook} alt='' aria-hidden="true" className='inline-block w-5 h-5 mr-0.5' animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}  /> Cook: {recipe.cookMinutes} mins</span>
                    </div>

                    {/* Button */}
                    <Link
                        to={`/recipes/${recipe.slug}`}
                        className="w-full block text-center cursor-pointer rounded-md bg-evergreen-900 py-2 mb-6 md:mb-0 text-sm font-bold text-white hover:text-orange-500 focus:outline focus:outline-orange-500"
                        aria-label={`View details for ${recipe.title}`}
                    >
                        View Recipe
                    </Link>
                </div>
            </article>
    )
}

export default RecipeItem
