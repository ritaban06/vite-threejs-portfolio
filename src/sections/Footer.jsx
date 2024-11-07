const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3 items-center">
        <div className="social-icon">
          <a href="https://github.com/ritaban06" target="_blank" rel="noopener noreferrer">
            <img src="/assets/github.svg" alt="GitHub profile" className="w-6 h-6" />
          </a>
        </div>
        <div className="social-icon">
        <a href="https://www.instagram.com/ritaban06/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/instagram.svg" alt="Instagram profile" className="w-6 h-6" />
        </a>
        </div>
        <div className="social-icon">
        <a href="https://x.com/RitabanGho95222" target="_blank" rel="noopener noreferrer">
          <img src="/assets/twitter.svg" alt="Twitter profile" className="w-6 h-6" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2024 Ritaban Ghosh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
