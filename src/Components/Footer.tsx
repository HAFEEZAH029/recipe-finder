import insta from '../assets/Images/Scale/icon-instagram.svg';
import tik from '../assets/Images/Scale/icon-tiktok.svg';
import butterfly from '../assets/Images/Scale/icon-bluesky.svg'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-6xl flex flex-col-reverse mini:flex-row items-center justify-center mini:justify-between gap-6 mini:gap-0 mb-12" role="contentinfo" aria-label="Site footer">
        <p className="text-xl text-[#4f5f5b]">
          Made with <span className="text-red-500 text-3xl" aria-label="love">♥</span> and <span role="img" aria-label="avocado">🥑</span>
        </p>

        <div className="flex items-center gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile" className="hover:opacity-70 transition">
            <img src={insta} className="h-8 w-8" alt="Instagram logo" />
          </a>

          <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile" className="hover:opacity-70 transition">
            <img src={butterfly} className="h-8 w-8" alt="Twitter (X) logo" />
          </a>

          {/* TikTok (custom since lucide doesn’t include it by default) */}
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok profile" className="hover:opacity-70 transition">
            <img src={tik} className="h-8 w-8" alt="TikTok logo" />
          </a>
        </div>
    </footer>
  );
};

export default Footer;