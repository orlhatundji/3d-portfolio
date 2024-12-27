import React from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
  const [hasCopied, setHasCopied] = React.useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("orlhatundji@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/profile-picture.png"
              alt="profile picture"
              className="w-full sm:h-[276px] h-fit object-contain grayscale rounded"
            />
            <div className="">
              <p className="grid-headtext">Hi, I'm Simon</p>
              <p className="grid-subtext">
                I have over 4 years of experience in frontend, backend and some
                mobile development, with a focus on React, Nodejs and React
                Native.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container w-full">
            <img
              src="/assets/tech-stack.svg"
              alt="tech stack"
              className="w-full sm:h-[276px] h-fit object-contain grayscale"
            />
            <div className="">
              <p className="grid-headtext">Tech stack</p>
              <p className="grid-subtext">
                I use modern technologies like Typescript, React, Express,
                MongoDB, PostgreSQL, React Native, Redux, Tailwind CSS, etc.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImage={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 6.2718,
                    lng: 3.2303,
                    text: "I am here",
                    color: "white",
                    size: 20,
                  },
                ]}
              />
            </div>
            <div className="">
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I am based in Lagos, Nigeria and I collaborate with teams across
                multiple time zones. I am open to new opportunities.
              </p>
              <a href="#contact">
                <Button
                  name="Contact me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div className="">
              <p className="grid-headtext">My knack for coding</p>
              <p className="grid-subtext">
                I am passionate about software engineering and I love to build applications
                that solve real world problems. I enjoy teaching as much as I enjoy learning.
                I am on a journey to becoming a world-class sought after engineer.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full md:h-[96px] sm:h-[276px] h-fit object-cover sm:object-contain"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  orlhatundji@gmail.com
                </p>
              </div>
            </div>
              <div className="flex gap-2 justify-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
