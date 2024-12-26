import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>© 2022 Simon Olatunji</p>
        <p className="text-white-300">|</p>
        <p>Privacy Policy</p>
        <p className="text-white-300">|</p>
        <p>All Rights Reserved</p>
      </div>
      <div className="flex gap-2">
        <a href="https://www.github.com/orlhatundji">
          <div className="social-icon">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/orlhatundji">
          <div className="social-icon">
            <img
              src="/assets/linkedin.svg"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Footer;
