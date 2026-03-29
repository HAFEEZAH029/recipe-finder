
const Intro = () => {
  return (
    <section className="relative overflow-hidden mb-12" aria-labelledby="recipes-intro-heading">
      <div className="mx-auto max-w-6xl space-y-5 text-evergreen-900 text-left md:text-center sm:text-left">
        <h1 id="recipes-intro-heading" className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight">
          Explore our simple healthy recipes
        </h1>

        <p className="mx-auto mt-4 max-w-2xl md:text-xl md:leading-8 leading-6 sm:text-base">
          Discover eight quick, whole-food dishes that fit real-life schedules and taste amazing.
          Use the search bar to find a recipe by name or ingredient, or simply scroll the list
          and let something delicious catch your eye.
        </p>

      </div>
    </section>
  );
};

export default Intro;