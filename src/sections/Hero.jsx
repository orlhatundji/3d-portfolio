import { Suspense, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Components
import { calculateSizes } from "../constants";
import CanvasLoader from "../components/CanvasLoader";
import Button from "../components/Button";
import gsap from "gsap";
import { BackgroundBeamsWithCollision } from "../components/BackgroundBeansWithCollision";

const Hero = () => {
  // const controls = useControls("HackerRoom", {
  //   positionX: {
  //     value: 2.1,
  //     min: 1.5,
  //     max: 3,
  //   },
  //   positionY: {
  //     value: -7.6,
  //     min: -7.6,
  //     max: -7.6,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: 0,
  //     max: 0,
  //   },
  //   rotationX: {
  //     value: 0.2,
  //     min: -0.3,
  //     max: 1.4,
  //   },
  //   rotationY: {
  //     value: -3.2,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 0.1,
  //     min: 0,
  //     max: 0.2,
  //   },
  // });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  useEffect(() => {
    gsap.to(".cyclist", {
      x: "100vw",
      duration: 30,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(".car", {
      x: "100vw",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <section
      className="min-h-[calc(max(820px,100vh))] p-1 w-full flex flex-col relative"
      id="hero"
    >
      {/* <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 flex-1">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hello, welcome to my space <span className="waving-hand">👋🏾</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I am a fullstack engineer.
        </p>
      </div> */}
      <BackgroundBeamsWithCollision className="flex-1 flex flex-col justify-center">
        <div className="flex-1" />
        <Suspense fallback={<CanvasLoader />}>
          <div className="relative pt-80 overflow-hidden mb-56 bg-city bg-cover bg-no-repeat">
            <img
              src="/assets/volkswagen.gif"
              alt="car"
              className="car absolute -bottom-[2vw] h-[25vw] max-h-48"
            />
            <img
              src="/assets/cyclist.gif"
              alt="cyclist"
              className="cyclist absolute bottom-0 h-[10vw] max-h-20"
            />
          </div>
        </Suspense>
        <div className="absolute bottom-7 left-o right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button
              name="Let's work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96"
            />
          </a>
        </div>
        <div className="flex-1" />
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;
