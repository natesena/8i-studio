import React from "react";
import StudioFrame from "./studio-frame";

const volcapMaxStudioInfo = [
  "Volucap Max Studio is located on 170 square meters in Studio Babelsberg’s FX Center. The setup offers an active action area of 3 meters. Volucap Max features a unique lighting system, developed in cooperation with ARRI, which allows for a particularly natural illumination of skin tones. The world-leading resolution of our Volucap Max Stage allows for maximum quality in a controlled environment without waiting times.",
  "Inside the Max Stage, people and objects can be scanned three-dimensionally and lifelike with motion as volucaps. Intelligent software algorithms enable automatic calculation of 3D surfaces and textures. Volucaps can be inserted into any AR, MR, VR, 360° or 2D video/web application on a variety of devices such as phones, holographic headsets and Windows Mixed Reality immersive headsets."
];

const VolucapMaxStudio = () => {
  return (
    <StudioFrame 
      title="Volucap Max Studio" 
      infoList={volcapMaxStudioInfo} 
      buttonText="BERLIN"
    />
  );
};

export default VolucapMaxStudio;
