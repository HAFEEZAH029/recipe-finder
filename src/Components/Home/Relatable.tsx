import home from '../../assets/Images/Large/image-home-real-life-large.webp'

const Relatable = () => {
  return (
    <section className="flex items-center mb-12 justify-center" aria-labelledby="relatable-heading">
      <div className="grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className='text-evergreen-900 text-left'>
          <h2 id="relatable-heading" className="font-extrabold tracking-tight text-3xl md:text-6xl sm:text-5xl">
            Built for real life
          </h2>

          <p className="mt-5 font-semibold leading-10 text-2xl ">
            Cooking shouldn't be complicated. These recipes come in under
            <span className="relative font-extrabold mx-2 text-evergreen-600"> 30 minutes
              <span className="absolute inset-x-0 bottom-1 -z-10 rounded-sm bg-orange-500 h-4" aria-hidden="true" />   </span>
             of active time, fit busy schedules, and taste good enough to repeat.
          </p>

          <p className="mt-5 text-2xl font-semibold leading-10 ">
            Whether you're new to the kitchen or just need fresh ideas, we've got you covered.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={home}
            alt="A person preparing vegetables in a home kitchen."
            className="h-65 w-full object-cover sm:h-85 lg:h-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Relatable;