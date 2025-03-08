import OpenSource from "@/components/section/open-source";
import StudioNetwork from "@/components/section/studio-network";
import CreatorNetwork from "@/components/section/creator-network";
import StudioLocationNY from "@/components/section/studio-location-ny";
import StudioLighthouseVenice from "@/components/section/studio-lighthouse-venice";
import StudioLighthouseLondon from "@/components/section/studio-lighthouse-london";
import Partners from "@/components/section/partners";
import PostProduction from "@/components/section/post-production";
import VolumetricGuassianSplat from "@/components/section/volumetric-guassian";
import VolumetricLibrary from "@/components/section/volumetric-library";
import AboutUs from "@/components/section/about-us";
import ZeroSpace from "@/components/section/zero-space";
import WsaInfo from "@/components/section/wsa-info";
import SpatialStudioInfo from "@/components/section/spatial-studio";
import VolucapMaxStudio from "@/components/section/volucap-max-studio";
import VolumetricStudioFeatures from "@/components/section/volumetric-studio-features";
import HumanSynthesisStudio from "@/components/section/human-synthesis-studio";
import TalentCapture from "@/components/section/talent-capture";
import ICMXVolumeCapture from "@/components/section/icmx";
import GenerativeProductionService from "@/components/section/generative-production-service";
// RMC  Softbank -IMAGICA Shinagawa Production Center
const Page = () => {
  return (
    <div className="bg-white p-[1rem] md:p-[2rem] flex flex-col gap-[2rem] max-w-screen overflow-x-hidden">
      <StudioNetwork />
      <ZeroSpace />
      <WsaInfo />
      <SpatialStudioInfo />
      <VolucapMaxStudio />
      <VolumetricStudioFeatures />
      <HumanSynthesisStudio />

      {/* Default Frame324 */}
      <TalentCapture />
      <ICMXVolumeCapture />
      <GenerativeProductionService />
      <PostProduction />

      <CreatorNetwork />
      <StudioLocationNY />
      <StudioLighthouseVenice />
      <StudioLighthouseLondon />

      <AboutUs />
      <Partners />

      <OpenSource />
      <VolumetricGuassianSplat />
      <VolumetricLibrary />
    </div>
  );
};

export default Page;
