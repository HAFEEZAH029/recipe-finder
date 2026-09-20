
import heroImg from '../../assets/Images/Large/image-home-hero-large.webp';
import backG from '../../assets/Images/Scale/pattern-squiggle-1.svg';

const Hero = () => {
  return (
    <section className="flex items-center mb-12 justify-center relative " aria-labelledby="hero-heading">
      <img
        src={backG}
        alt=""
        aria-hidden="true"
        className="
          absolute
          -z-10
          lg:-translate-y-45
          md:-translate-y-30
          sm:-translate-y-20
          max-w-lvw
        "
      />
      <div className="overflow-hidden w-full mini:w-[90%] rounded-3xl border-8 border-white">
        <img
          src={heroImg}
          alt="A colorful, healthy meal on a plate."
          className="w-full object-cover h-55 sm:h-85 lg:h-120"
        />
      </div>
    </section>
  );
};

export default Hero;