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
              src="/assets/grid1.png"
              alt="grid1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div className="">
              <p className="grid-headtext">Hi, I'm Simon</p>
              <p className="grid-subtext">
                With 4 years of experience I have honed my sills in frontend,
                backend and a little bit of mobile development, with a focus on
                React, Nodejs and React Native.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid2"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div className="">
              <p className="grid-headtext">What I use</p>
              <p className="grid-subtext">
                I use modern technologies like React, Nodejs, Express, MongoDB,
                PostgreSQL, React Native, Redux, Tailwind CSS, Material UI,
                Styled Components, etc.
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
                I am based in Lagos, Nigeria and I work remotely with clients
                across the globe. I am available for hire and I am open to new
                opportunities.
              </p>
              <Button name="Contact me" isBeam containerClass="w-full mt-10" />
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
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                I am passionate about coding and I love to build applications
                that solve real world problems. I am always learning and
                improving my skills.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-contain"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
