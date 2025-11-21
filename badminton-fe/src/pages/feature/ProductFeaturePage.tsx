import Hero from "./components/Hero";
import Tech from "./components/Tech";
import FrameDetails from "./components/FrameDetails";
import Specs from "./components/Specs";
import Performance from "./components/Performance";
import FinalCTA from "./components/FinalCTA";

import { featuredProduct, techFeatures, frameDetails, fullSpecs } from "../../store/featuredProduct";

export default function ProductFeaturePage() {
  return (
    <div>
      <Hero product={featuredProduct} />
      <Tech features={techFeatures} />
      <FrameDetails details={frameDetails} />
      <Specs specs={fullSpecs} />
      <Performance quote="Axforce 90 Max cho tôi cảm giác smash uy lực và kiểm soát tuyệt đối." author="— VĐV Cầu Lông Chuyên Nghiệp" />
      <FinalCTA link={featuredProduct.link} text="Sẵn sàng nâng tầm cuộc chơi của bạn?" />
    </div>
  );
}
