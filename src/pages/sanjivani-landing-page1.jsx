import Hero from "../components/hero";
import FrameComponent from "../components/frame-component";
import FrameComponent1 from "../components/frame-component1";
import Rice from "../components/rice";
import ContactUs from "../components/contact-us";
import Elevated from "../components/elevated"; // Ensure this is the right import path for Elevated
import "./sanjivani-landing-page1.css";

const SanjivaniLandingPage1 = () => {
  return (
    <div className="sanjivani-landing-page">
      <main className="hero-parent">
        <Hero />
        <FrameComponent />
        <FrameComponent1 />
        <div className="folder-preview">
          <div className="product">
            <b className="see-all-product">See all products</b>
            <b className="discover-the-benefits">
                         Discover the Benefits of Sanjivani
            </b>
            <div className="crop-health-is">
              Crop health is a universal concern. With Sanjivani, unite science
              and technology to protect and nurture your fields.
            </div>
            <div className="product1">
              <Rice
                rectangle10="/rectangle-101@2x.png"
                healthyCrops="Healthy Crops"
                earlyDiseaseDetectionAndManagem="Early disease detection and management lead to healthier crops."
              />
              <Rice
                propLeft="360px"
                rectangle10="/rectangle-12@2x.png"
                propLeft1="42px"
                healthyCrops="Productivity"
                propLeft2="calc(50% - 79.5px)"
                propWidth="158px"
                earlyDiseaseDetectionAndManagem="Enhanced productivity due to timely interventions."
              />
              <div className="pumpkin">
                <div className="pumpkin-child" />
                <div className="minimize-losses">Minimize Losses</div>
                <div className="minimizes-financial-losses">
                  Minimizes financial losses from crop diseases.
                </div>
                <img
                  className="pumpkin-item"
                  alt="Pumpkin crop"
                  src="/rectangle-121@2x.png"
                />
              </div>
              <div className="cabbage">
                <div className="pumpkin-child" />
                <div className="anywhere-anytime">Anywhere, Anytime</div>
                <div className="use-sanjivani-on-the-go">
                  Use Sanjivani on-the-go, providing a portable plant doctor in
                  your pocket.
                </div>
                <img
                  className="cabbage-item"
                  alt="Cabbage crop"
                  src="/rectangle-13@2x.png"
                />
              </div>
            </div>
           
          </div>
        </div>
      </main>
      <Elevated className="elevated-1" />
      <ContactUs />
    </div>
  );
};

export default SanjivaniLandingPage1;
