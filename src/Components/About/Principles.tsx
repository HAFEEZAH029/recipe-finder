import bullet from '../../assets/Images/Scale/icon-bullet-point.svg';
import { motion } from 'motion/react';

const Principles = () => {
  const principles = [
    {
      title: "Whole ingredients first.",
      description: "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe."
    },
    {
      title: "Flavor without compromise.",
      description: "Savory, citrus, and natural sweetness work together—no excess salt, sugar, and additives."
    },
    {
      title: "Respect for time.",
      description: "Weeknight meals should suit real schedules; weekend cooking can be leisurely but never wasteful."
    },
    {
      title: "Sustainable choices.",
      description: "Smart ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly."
    }
  ];

  return (
    <section className="mx-auto max-w-6xl mb-12 flex flex-col gap-5 sm:gap-0 sm:flex-row sm:items-center items-start justify-between" aria-labelledby="food-philosophy-heading">
      <h2 id="food-philosophy-heading" className="w-full sm:w-[40%] text-left self-start text-4xl lg:text-5xl font-extrabold text-evergreen-900 leading-10 lg:leading-13">
        Our food philosophy
      </h2>

      <ul className="space-y-8 sm:space-y-10 w-full sm:w-[60%]" role="list" aria-label="Principles list">
        {principles.map((principle, index) => (
          <li key={index} className="flex gap-4 sm:gap-6" tabIndex={0} aria-label={principle.title}>
            <motion.div
              className="shrink-0 mt-1 h-fit"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={bullet} alt='' aria-hidden="true" />
            </motion.div>

            <div className="flex-1 text-evergreen-900 text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                {principle.title}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                {principle.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Principles;