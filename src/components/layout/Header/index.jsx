import "./styles.css";
import envelope from "../../../assets/envelope.svg";
import phone from "../../../assets/phone.svg";
import arrowdown from "../../../assets/arrowdown.svg"
import user from "../../../assets/user.svg"
import heart from "../../../assets/heart.svg"
import cart from "../../../assets/cart.svg"

export default function Header() {
  return (
    <header>
      <div className="container-header">

        <div className="container-header-list-first">
          <div className="container-header-email">
            <img src={envelope} alt="envelope" />
            <span>johnnyzenghw@gmail.com</span>
          </div>
          <div className="container-header-phone">
            <img src={phone} alt="phone" />
            <span>(11-989359133)</span>
          </div>
        </div>

        <div className="container-header-list-second">
          <div className="container-header-language">
            <span>English</span>
            <img src={arrowdown} alt="arrowdown" />
          </div>
          <div className="container-header-currency">
            <span>(USD)</span>
            <img src={arrowdown} alt="arrowdown" />
          </div>
          <div className="container-header-login">
            <span>Login</span>
            <img src={user} alt="user" />
          </div>
          <div className="container-header-wishlist">
            <span>Wishlist</span>
            <img src={heart} alt="heart" />
          </div>
          <div className="container-header-cart">
            <img src={cart} alt="cart" />
          </div>
        </div>

      </div>
    </header>
  );
}
