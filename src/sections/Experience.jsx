import React from "react";
import { workExperiences } from "../constants";
import { Vortex } from "../components/Vortex";

const Experience = () => {
  const [animationName, setAnimationName] = React.useState("idle");
  const [index, setIndex] = React.useState(0);
  const [baseHue, setBaseHue] = React.useState(220);
  const handleExperienceClick = (index) => {
    setBaseHue(360 / (parseInt(index) + 1));
  }

  return (
    <div className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <h3 className="head-text">Experience</h3>
        <div className="work-container">
         
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({
                  id,
                  name,
                  pos,
                  icon,
                  duration,
                  title,
                  technologies,
                  animation,
                }, index) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    // onClick={() => handleExperienceClick(index)}
                    onClick={() => setIndex(index)}
                    onPointerOver={() =>
                      handleExperienceClick(index)}
                    // onPointerOut={() => handleExperienceClick(120)}
                  >
                    <div className="flex flex-col h-ful justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img
                          src={icon}
                          alt="logo"
                          className="w-full h-full animate-pulse"
                        />
                      </div>
                      <div className="work-content_bar" />
                    </div>

                    <div className="sm:p-5 py-5 px-2.5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                      <div className="mt-4 flex gap-1 flex-wrap">
                        {technologies.map(({ id, name }, index) => (
                          <span
                            key={id}
                            className={`py-0.5 px-1 rounded text-xs ${
                              index % 2 === 0
                                ? "bg-white-800 text-black"
                                : "bg-white-500 text-white-700"
                            }`}
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative h-full overflow-hidden text-white">
            {/* <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={250}
              baseHue={baseHue}
              className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            /> */}
            {/* <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
