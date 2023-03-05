import "./styles.css";
import f_i_t from "../../../assets/f_i_t.svg";

export default function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="container-footer-up">
          <div className="container-footer-first">
            <h3>Hekto</h3>
            <div className="container-footer-email">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Adress"
              />
              <button>Sign Up</button>
            </div>
            <span>Contact Info</span>
            <span>17 Princess Road, London, Greater London NW1 8JR, UK</span>
          </div>

          <div className="container-footer-second">
            <li>Categories</li>
            <ul>Laptops & Computers</ul>
            <ul>Cameras & Photography</ul>
            <ul>Smart Phones & Tablets</ul>
            <ul>Video Games & Consoles</ul>
            <ul>Waterproof Headphones</ul>
          </div>

          <div className="container-footer-third">
            <li>Customer Care</li>
            <ul>My Account</ul>
            <ul>Discount</ul>
            <ul>Returns</ul>
            <ul>Orders History</ul>
            <ul>Order Tracking</ul>
          </div>

          <div className="container-footer-fourth">
            <li>Pages</li>
            <ul>Blog</ul>
            <ul>Browse the Shop</ul>
            <ul>Category</ul>
            <ul>Pre-Built Pages</ul>
            <ul>Visual Composer Elements</ul>
            <ul>WooCommerce Pages</ul>
          </div>
        </div>

        <div className="container-footer-down">
          <div className="container-footer-down-join">
            <span>©Webecy - All Rights Reserved</span>
            <img src={f_i_t} alt="f_i_t" />
          </div>
        </div>
      </div>
    </footer>
  );
}
