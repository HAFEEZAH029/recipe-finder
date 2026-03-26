import bullet from '../../assets/Images/Scale/icon-bullet-point.svg';

const Origin = () => {
  const reasons = [
    {
      title: "Cut through the noise.",
      description: "The internet is bursting with recipes, yet most busy cooks still default to take-away or pre-packaged foods. We curate a tight collection of feel-good dishes so you can skip the scrolling and start cooking."
    },
    {
      title: "Empower home kitchens.",
      description: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and made in about half an hour of active prep."
    },
    {
      title: "Make healthy look good.",
      description: "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters."
    }
  ];

  return (
    <section className="mx-auto max-w-6xl mb-12 pb-10 border-b-2 border-b-grey-300 flex flex-col gap-5 sm:gap-0 sm:flex-row sm:items-center items-start justify-between">
      <h2 className="w-full sm:w-[40%] text-left self-start text-4xl lg:text-5xl font-extrabold text-evergreen-900">
        Why we exist
      </h2>
      
      <div className="space-y-8 sm:space-y-10 w-full sm:w-[60%]">
        {reasons.map((reason, index) => (
          <div key={index} className="flex gap-4 sm:gap-6">
            <div className="shrink-0 mt-1">
              <img src={bullet} alt='bullet-point' />
            </div>
            
            <div className="flex-1 text-evergreen-900 text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                {reason.title}
              </h3>
              <p className="text-base sm:text-lgleading-relaxed">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Origin;