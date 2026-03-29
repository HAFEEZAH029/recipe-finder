import whole from '../../assets/Images/Scale/icon-whole-food-recipes.svg';
import fuss from '../../assets/Images/Scale/icon-minimum-fuss.svg';
import search from '../../assets/Images/Scale/icon-search-in-seconds.svg';
import { motion } from 'motion/react';


const benefits = [
  {
    icon: <img src={whole} alt='' aria-hidden="true" className="h-5 w-5 " />,
    title: "Whole-food recipes",
    description: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    icon: <img src={fuss} alt='' aria-hidden="true" className="h-5 w-5 " />,
    title: "Minimum fuss",
    description: "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    icon: <img src={search} alt='' aria-hidden="true" className="h-5 w-5 " />,
    title: "Search in seconds",
    description: "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

const Benefit = () => {
  return (
    <section className="flex items-center mb-12 pb-10 md:justify-center border-b-2 border-b-grey-300" aria-labelledby="benefit-heading">
      <div className="max-w-6xl">
        <h2 id="benefit-heading" className="md:text-center text-left text-4xl font-extrabold text-evergreen-900 sm:text-3xl">
          What you'll get
        </h2>

        <ul className="mt-8 grid align- gap-6 md:grid-cols-3" role="list" aria-label="Recipe benefits">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="text-evergreen-600 text-left"
              tabIndex={0}
              aria-label={benefit.title}
            >
              <motion.div
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="text-2xl font-extrabold">{benefit.title}</h3>
              <p className="mt-2 max-w-sm text-xl leading-6b]">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefit;