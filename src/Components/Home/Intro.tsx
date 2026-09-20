import Button from "../Button";



const Intro = () => {
  return (
    <section className="relative overflow-hidden mb-12" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-6xl space-y-5 text-evergreen-900 text-left md:text-center sm:text-left">

        <h1 id="intro-heading" className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="relative inline-block mr-1">
            Healthy
            <span className="absolute inset-x-0 bottom-2 -z-10 rounded-sm bg-orange-200 sm:h-6" aria-hidden="true" />
          </span>
            meals, zero fuss
        </h1>

        <p className="mx-auto mt-4 max-w-2xl md:text-xl md:leading-8 leading-6 sm:text-base">
          Discover eight quick, whole-food recipes that you can cook tonight-no processed junk, no guesswork.
        </p>

        <Button title="Start Exploring" aria-label="Start exploring healthy recipes" />

      </div>
    </section>
  );
};

export default Intro;