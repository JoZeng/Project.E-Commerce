import "./styles.css";
import chairstylish from "../../../../assets/chairstylish.svg";

export default function UniqueFeatures() {
  return (
    <div className="container-uniquefeatures">
      <div className="container-uniquefeatures-img">
        <img src={chairstylish} alt="chairstylish" />
      </div>
      <div className="container-uniquefeatures-card">
        <h2>
          Unique Features Of leatest & <br></br>Trending Poducts
        </h2>

        <div className="list-item">
          <div className="list-item-red">
            <span id="red">
              All frames constructed with hardwood solids and laminates
            </span>
          </div>

          <div className="list-item-blue">
            <span id="blue">
              Reinforced with double wood dowels, glue, screw - nails corner{" "}
              <br></br>blocks and machine nails
            </span>
          </div>

          <div className="list-item-green">
            <span id="green">
              All frames constructed with hardwood solids and laminates
            </span>
          </div>
        </div>

        <div className="container-card-button-price">
          <div className="container-uniquefeatures-card-button">
            <span>Add To Cart</span>
          </div>
          <div className="container-price">
            <p>B&B Italian Sofa </p>
            <span id="price">$32.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
