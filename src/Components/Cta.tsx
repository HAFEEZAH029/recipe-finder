import fork from '../assets/Images/Scale/pattern-fork.svg'
import knife from '../assets/Images/Scale/pattern-knife.svg';
import Button from './Button';



const Cta = () => {
  return (
    <section className="relative mx-auto max-w-6xl overflow-clip flex items-center mb-12 justify-center bg-grey-200 rounded-3xl py-22 ">
        <div className="">
           <div className='hidden mini:block'>
               <img src={fork} alt='fork svg' className='absolute mini:-left-15 md:-left-25 mini:-bottom-6 md:top-5 mini:h-45 mini:w-45 md:h-85 md:w-85' />
           </div>
           <div className='flex flex-col justify-center items-center text-center gap-5'>
                <h2 className="md:text-5xl xsm:text-3xl font-extrabold text-evergreen-900 z-1">
                    Ready to cook smarter?
                </h2>

                <p className="md:text-xl leading-7 font-bold text-evergreen-900 sm:text-md sm:px-auto px-4 z-1">
                    Hit the button, pick a recipe, and get dinner on the table—fast.
                </p>

                <Button title='Browse Recipes' />
            </div>
            <div className='absolute md:-right-10 md:top-8 mini:-right-10 mini:-top-8 hidden mini:block mini:h-40 mini:w-40 md:h-65 md:w-65 z-0'>
               <img src={knife} alt='knife svg'/>
           </div>
        </div>
    </section>
  );
};

export default Cta;