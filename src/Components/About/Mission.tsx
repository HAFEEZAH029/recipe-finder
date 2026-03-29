import mission from '../../assets/Images/Large/image-about-our-mission-large.webp';
import squig from '../../assets/Images/Scale/pattern-squiggle-2.svg';
import { motion } from 'motion/react';

const Mission = () => {
  return (
    <section className="relative flex items-center mb-12 mt-12 justify-center" aria-labelledby="mission-heading">
      <div className="grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className='text-evergreen-900 text-left'>
          <motion.h3
            id="mission-heading"
            className='bg-orange-600 w-fit rounded-xl p-1.5 font-bold'
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            tabIndex={0}
          >
            Our mission
          </motion.h3>

          <p className="mt-5 font-extrabold tracking-tight text-4xl md:text-4xl mini:text-5xl">
            Help more people cook nourishing meals more often
          </p>

          <p className="mt-5 font-semibold leading-10 text-xl ">
            Healthy Recipe finder was created to prove that healthy eating can be convenient,
            affordable, and genuinely delicious.
          </p>

          <p className="mt-5 text-xl font-semibold leading-10 ">
            We showcase quick, whole-food dishes that anyone can master- no fancy equipment, no
            ultra-processed shortcuts- just honest ingredients and straightforward steps.
          </p>
        </div>

        <div className="overflow-hidden lg:self-stretch rounded-2xl">
          <img
            src={mission}
            alt="A person preparing fresh vegetables on a kitchen counter."
            className="h-65 w-full object-cover sm:h-85 lg:h-full"
          />
        </div>

        <div className="hidden lg:block absolute lg:-right-8 lg:bottom-20 xl:-right-10 xl:bottom-15" aria-hidden="true">
          <img
            src={squig}
            alt="Decorative squiggle pattern"
            className="w-35 h-35 xl:w-50 xl:h-50"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;