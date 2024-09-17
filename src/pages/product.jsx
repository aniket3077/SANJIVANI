import Rice from "../components/rice";
import "./product.css";

const Product = () => {
  return (
    <div className="product">
    <b className="see-all-product">See all product</b>
    <b className="discover-the-benefits">
      Discover the Benefits of Sanjivani
    </b>
    <div className="crop-health-is">
      Crop health is a universal concern. With Sanjivani, unite science and technology to protect and nurture your fields.
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
        earlyDiseaseDetectionAndManagem="Enhanced productivity due to timely interventions"
      />
      <div className="pumpkin">
        <div className="pumpkin-child" />
        <div className="minimize-losses">Minimize Losses</div>
        <div className="minimizes-financial-losses">
          Minimizes financial losses from crop diseases.
        </div>
        <img className="pumpkin-item" alt="" src="/rectangle-121@2x.png" />
      </div>
      <div className="cabbage">
        <div className="pumpkin-child" />
        <div className="anywhere-anytime">Anywhere, Anytime</div>
        <div className="use-sanjivani-on-the-go">
          Use Sanjivani on-the-go, providing a portable plant doctor in your pocket.
        </div>
        <img className="cabbage-item" alt="" src="/rectangle-13@2x.png" />
      </div>
    </div>
  </div>
  
  );
};

export default Product;
