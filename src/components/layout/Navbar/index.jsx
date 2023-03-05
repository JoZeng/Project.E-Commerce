import "./styles.css";
import arrowdownred from "../../../assets/arrowdownred.svg";
import search from "../../../assets/search.svg";

export default function Navbar() {
  return (
    <div className="container-navbar">
      <div className="container-navbar-header">
        <h3>Hekto</h3>
      </div>

      <div className="container-navbar-list">
        <div className="container-navbar-home">
          <span>Home</span>
          <img src={arrowdownred} alt="arrowdown" />
        </div>
        <div className="container-navbar-pages">
          <span>Pages</span>
        </div>
        <div className="container-navbar-products">
          <span>Products</span>
        </div>
        <div className="container-navbar-blog">
          <span>Blog</span>
        </div>
        <div className="container-navbar-shop">
          <span>Shop</span>
        </div>
        <div className="container-navbar-contact">
          <span>Contact</span>
        </div>
      </div>

      <div className="container-navbar-search">
        <input type="search" placeholder="Search..." />
        <div className="container-magnifyingglass">
          <img src={search} alt="search" />
        </div>
        
      </div>
    </div>
  );
}
