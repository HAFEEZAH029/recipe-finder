import beyondPlateImg from '../../assets/Images/Large/about-beyond-the-plate-large.webp';

const Nutritious = () => {
  const initiatives = [
    "Encourage family dinners and social cooking.",
    "Highlight diverse cuisines and cooking traditions.",
    "Reduce reliance on single-use packaging and delivery waste.",
    "Spark curiosity about seasonal produce and local agriculture."
  ];

  return (
    <section className="mx-auto max-w-6xl mb-12 flex flex-col lg:flex-row lg:items-center items-start justify-between gap-8 lg:gap-0" aria-labelledby="beyond-plate-heading">
      <div className='w-full lg:w-[35%] text-left text-evergreen-900 space-y-5'>
        <h2 id="beyond-plate-heading" className="text-3xl mini:text-5xl lg:text-5xl font-extrabold">
          Beyond the plate
        </h2>
      
        <p className="text-xl leading-relaxed">
          We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
        </p>

        {/* Initiatives List */}
        <ul className="space-y-2" role="list" aria-label="Community initiatives">
        {initiatives.map((initiative, index) => (
          <li key={index} className="flex gap-4 items-center" tabIndex={0} aria-label={initiative}>
            <div className="shrink-0 self-start mt-1.5" aria-hidden="true">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full"></div>
            </div>
            <span className="text-base sm:text-lg text-gray-600 leading-relaxed">
              {initiative}
            </span>
          </li>
        ))}
        </ul>
      </div>

      {/* Image */}
      <div className="w-full lg:w-[60%] lg:self-stretch overflow-hidden rounded-xl">
        <img
          src={beyondPlateImg}
          alt="A diverse community gathering around a table of food."
          className="object-cover w-full h-fit lg:h-full "
        />
      </div>
    </section>
  );
};

export default Nutritious;