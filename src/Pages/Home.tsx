import Benefit from "../Components/Home/Benefit";
import Hero from "../Components/Home/Hero";
import Intro from "../Components/Home/Intro";
import Relatable from "../Components/Home/Relatable";
import Cta from "../Components/Cta";


export default function Home() {
    return (
        <>
        <main>
          <Intro />
          <Hero />
          <Benefit />
          <Relatable />
          <Cta />
        </main>
        </>
    );
}
