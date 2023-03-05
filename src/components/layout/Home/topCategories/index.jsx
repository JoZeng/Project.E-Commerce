import "./styles.css";
import topchair1 from "../../../../assets/topchair1.svg";
import topchair2 from "../../../../assets/topchair2.svg";
import topchair3 from "../../../../assets/topchair3.svg";
import topchair4 from "../../../../assets/topchair4.svg";
import threepoints from "../../../../assets/threepoints.svg";

export default function TopCategories() {
  return (
    <div className="container-topcategories">
      <h3>Top Categories</h3>
      <div className="container-topcategories-imgs">
        <div className="container-topcategories-img">
          <div className="container-img">
            <img src={topchair1} alt="topchair1" />
          </div>
          <span className="container-span1">Mini LCW Chair</span>
          <span className="container-span2">$56.00</span>
        </div>

        <div className="container-topcategories-img">
          <div className="container-img">
            <img src={topchair2} alt="topchair2" />
          </div>
          <span className="container-span1">Mini LCW Chair</span>
          <span className="container-span2">$56.00</span>
        </div>

        <div className="container-topcategories-img">
          <div className="container-img">
            <img src={topchair3} alt="topchair3" />
          </div>
          <span className="container-span1">Mini LCW Chair</span>
          <span className="container-span2">$56.00</span>
        </div>

        <div className="container-topcategories-img">
          <div className="container-img">
            <img src={topchair4} alt="topchair4" />
          </div>
          <span className="container-span1">Mini LCW Chair</span>
          <span className="container-span2">$56.00</span>
        </div>

      </div>
      <img className="container-topcategories-threepoints" src={threepoints} alt="threepoints" />
    </div>
  );
}
