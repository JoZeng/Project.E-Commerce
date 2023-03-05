import "./styles.css";
import chair1 from "../../../../assets/chair1.svg";
import chair2 from "../../../../assets/chair2.svg";
import chair3 from "../../../../assets/chair3.svg";
import chair4 from "../../../../assets/chair4.svg";
import selectcolors from "../../../../assets/selectcolors.svg";
import redline from "../../../../assets/redline.svg";

export default function FeaturedProducts() {
  return (
    <div className="container-featuredproducts">
      <div className="container-featuredproducts-h3">
        <h3>Features Products</h3>
      </div>
      <div className="container-featuredproducts-card">
        <div className="container-featuredproducts-chair">
          <div className="container-featuredproducts-cardimg">
            <img src={chair1} alt="chair1" />
          </div>
          <div className="container-featuredproducts-chair-details">
            <h3>Cantilever chair</h3>
            <div className="container-selectcolors">
              <img src={selectcolors} alt="selectcolors" />
            </div>
            <span>Code - Y523201</span>
            <p>$42.00</p>
          </div>
        </div>

        <div className="container-featuredproducts-chair">
          <div className="container-featuredproducts-cardimg">
            <img src={chair2} alt="chair2" />
          </div>
          <div className="container-featuredproducts-chair-details">
            <h3>Cantilever chair</h3>
            <div className="container-selectcolors">
              <img src={selectcolors} alt="selectcolors" />
            </div>
            <span>Code - Y523201</span>
            <p>$42.00</p>
          </div>
        </div>

        <div className="container-featuredproducts-chair">
          <div className="container-featuredproducts-cardimg">
            <img src={chair3} alt="chair3" />
          </div>
          <div className="container-featuredproducts-chair-details">
            <h3>Cantilever chair</h3>
            <div className="container-selectcolors">
              <img src={selectcolors} alt="selectcolors" />
            </div>
            <span>Code - Y523201</span>
            <p>$42.00</p>
          </div>
        </div>

        <div className="container-featuredproducts-chair">
          <div className="container-featuredproducts-cardimg">
            <img src={chair4} alt="chair4" />
          </div>
          <div className="container-featuredproducts-chair-details">
            <h3>Cantilever chair</h3>
            <div className="container-selectcolors">
              <img src={selectcolors} alt="selectcolors" />
            </div>
            <span>Code - Y523201</span>
            <p>$42.00</p>
          </div>
        </div>
      </div>
      <div className="img-redline">
      <img src={redline} alt="redline" />
      </div>
    </div>

  );
}
