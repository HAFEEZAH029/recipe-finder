import whole from '../../assets/Images/Scale/icon-whole-food-recipes.svg';
import fuss from '../../assets/Images/Scale/icon-minimum-fuss.svg';
import search from '../../assets/Images/Scale/icon-search-in-seconds.svg';


const benefits = [
  {
    icon: <img src={whole} alt='vegetable icon' className="h-5 w-5 " />,
    title: "Whole-food recipes",
    description: "Each dish uses everyday, unprocessed ingredients.",
  },
  {
    icon: <img src={fuss} alt='icon' className="h-5 w-5 " />,
    title: "Minimum fuss",
    description: "All recipes are designed to make eating healthy quick and easy.",
  },
  {
    icon: <img src={search} alt='search icon' className="h-5 w-5 " />,
    title: "Search in seconds",
    description: "Filter by name or ingredient and jump straight to the recipe you need.",
  },
];

const Benefit = () => {
  return (
    <section className="flex items-center mb-12 pb-10 md:justify-center border-b-2 border-b-grey-300">
      <div className="max-w-6xl">
        <h2 className="md:text-center text-left text-4xl font-extrabold text-evergreen-900 sm:text-3xl">
          What you'll get
        </h2>

        <div className="mt-8 grid align- gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="text-evergreen-600 text-left"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-extrabold">{benefit.title}</h3>
              <p className="mt-2 max-w-sm text-xl leading-6b]">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;