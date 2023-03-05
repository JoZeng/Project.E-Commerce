import "./styles.css";
import chair5 from "../../../../assets/chair5.svg";
import chair6 from "../../../../assets/chair6.svg";
import chair7 from "../../../../assets/chair7.svg";
import chair8 from "../../../../assets/chair8.svg";
import chair9 from "../../../../assets/chair9.svg";
import chair10 from "../../../../assets/chair10.svg";

export default function LeatestProducts() {
  return (
    <div className="container-leatestproducts">

      <div className="container-leatestproducts-h3">
        <h3>Leatest Products</h3>
      </div>
      <div className="container-leatestproducts-list">
            <span>New Arrival</span>
            <span>Best Seller</span>
            <span>Feature</span>
            <span>Special Offer</span>
      </div>

      <div className="container-leatestproducts-card">
        <div className="container-leatestproducts-chair">
          <div className="container-leatestproducts-cardimg">
            <img src={chair5} alt="chair5" />
          </div>
          <div className="container-leatestproducts-chair-details">
            <h3>Comfort Handy Craft</h3>
            <p>$42.00</p>
            <span>$65.00</span>
          </div>
        </div>

        <div className="container-leatestproducts-chair">
          <div className="container-leatestproducts-cardimg">
            <img src={chair6} alt="chair6" />
          </div>
          <div className="container-leatestproducts-chair-details">
            <h3>Comfort Handy Craft</h3>
            <p>$42.00</p>
            <span>$65.00</span>
          </div>
        </div>

        <div className="container-leatestproducts-chair">
          <div className="container-leatestproducts-cardimg">
            <img src={chair7} alt="chair7" />
          </div>
          <div className="container-leatestproducts-chair-details">
            <h3>Comfort Handy Craft</h3>
            <p>$42.00</p>
            <span>$65.00</span>
          </div>
        </div>

      </div>

      <div className="container-leatestproducts-card">
        <div className="container-leatestproducts-chair">
          <div className="container-leatestproducts-cardimg">
            <img src={chair8} alt="chair8" />
          </div>
          <div className="container-leatestproducts-chair-details">
            <h3>Comfort Handy Craft</h3>
            <p>$42.00</p>
            <span>$65.00</span>
          </div>
        </div>

        <div className="container-leatestproducts-chair">
          <div className="container-leatestproducts-cardimg">
            <img src={chair9} alt="chair9" />
          </div>
          <div className="container-leatestproducts-chair-details">
            <h3>Comfort Handy Craft</h3>
            <p>$42.00</p>
            <span>$65.00</span>
          </div>
        </div>

        <div className="container-leatestproducts-chair">
          <div className="container-leatestproducts-cardimg">
            <img src={chair10} alt="chair10" />
          </div>
          <div className="container-leatestproducts-chair-details">
            <h3>Comfort Handy Craft</h3>
            <p>$42.00</p>
            <span>$65.00</span>
          </div>
        </div>

      </div>

    </div>
  );
}
