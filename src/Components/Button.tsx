import { Link } from "react-router-dom";
import { motion } from "motion/react";

type Prop = {
    title: string
}

const Button = ({title}:Prop) => {
  return (
    <motion.button
    className="bg-evergreen-900 font-semibold text-xl text-white border-none outline-none hover:text-orange-500 px-5 md:px-6 py-2 md:py-2.5 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
    whileHover={{ scale: 1.1 }}
    transition={{type: 'spring', stiffness: 100, mass: 0.5, damping:10}}
    >
      <Link to='/recipes' onMouseEnter={() => import("../Pages/Recipes")}>{title}</Link> {/**this mouse event prefetches the recipe page on hover of this element */}
    </motion.button>
  )
}

export default Button;
