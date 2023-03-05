import "./styles.css";
import lamp from "../../../../assets/lamp.svg";
import armchair from "../../../../assets/armchair.svg";
import diamond from "../../../../assets/diamond.svg";

export default function Promotional() {
  return (
    <div className="container-promotional">
      <div className="container-promotional-card">
        <div className="container-promotional-subcard">
          <span>Best Furniture For Your Castle....</span>
          <h1>
            New Furniture Collection <br></br>Trends in 2020
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing <br></br>in phasellus non in justo.
          </p>
          <button>Shop Now</button>
        </div>
      </div>

      <img className="container-promotional-lamp" src={lamp} alt="lamp" />
      <img
        className="container-promotional-diamond"
        src={diamond}
        alt="diamond"
      />
      <img
        className="container-promotional-armchair"
        src={armchair}
        alt="armchair"
      />
    </div>
  );
}
