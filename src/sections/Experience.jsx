import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import Developer from "../components/Developer";

const Experience = () => {
  const [animationName, setAnimationName] = React.useState("idle");
  return (
    <div className="c-space my-20">
      <div className="w-full text-white-600">
        <h3 className="head-text">Experience</h3>
        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, icon, duration, title, technologies, animation }) => (
                  <div key={id} className="work-content_container group" 
                  onClick={() => setAnimationName(animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(animation.toLowerCase())}
                  onPointerOut={() => setAnimationName("idle")}
                  >
                    <div className="flex flex-col h-ful justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full animate-pulse" />
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
                        {technologies.map(({id, name}, index) => (
                          <span key={id} className={`py-0.5 px-1 rounded text-xs ${index % 2 === 0 ? "bg-white-800 text-black" : "bg-white-500 text-white-700"}`}>
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
        </div>
      </div>
    </div>
  );
};

export default Experience;
