import "./styles.css";
import chair11 from "../../../../assets/chair11.svg";
import chair12 from "../../../../assets/chair12.svg";
import chair13 from "../../../../assets/chair13.svg";
import chair14 from "../../../../assets/chair14.svg";
import clock from "../../../../assets/clock.svg";
import table from "../../../../assets/table.svg";
import minichair1 from "../../../../assets/minichair1.svg";
import minichair2 from "../../../../assets/minichair2.svg";
import minichair3 from "../../../../assets/minichair3.svg";

export default function TrendingProducts() {
  return (
    <div className="trendingprodcuts">
      <div className="container-trendingprodcuts-h3">
        <h3>Trending Products</h3>
      </div>
      <div className="container-trendingprodcuts-card-chair">
        <div className="container-trendingprodcuts-chair">
          <div className="container-trendingprodcuts-cardimg">
            <img src={chair11} alt="chair11" />
          </div>
          <div className="container-trendingprodcuts-chair-details">
            <h3>Cantilever chair</h3>
            <div className="container-trendingprodcuts-chair-details-prices">
              <span id="newprice">$26.00 </span>
              <span id="oldprice">$42.00</span>
            </div>
          </div>
        </div>

        <div className="container-trendingprodcuts-chair">
          <div className="container-trendingprodcuts-cardimg">
            <img src={chair12} alt="chair12" />
          </div>
          <div className="container-trendingprodcuts-chair-details">
            <h3>Cantilever chair</h3>
            <div className="container-trendingprodcuts-chair-details-prices">
              <span id="newprice">$26.00 </span>
              <span id="oldprice">$42.00</span>
            </div>
          </div>
        </div>

        <div className="container-trendingprodcuts-chair">
          <div className="container-trendingprodcuts-cardimg">
            <img src={chair13} alt="chair13" />
          </div>
          <div className="container-trendingprodcuts-chair-details">
            <h3>Cantilever chair</h3>
            <div className="container-trendingprodcuts-chair-details-prices">
              <span id="newprice">$26.00 </span>
              <span id="oldprice">$42.00</span>
            </div>
          </div>
        </div>

        <div className="container-trendingprodcuts-chair">
          <div className="container-trendingprodcuts-cardimg">
            <img src={chair14} alt="chair14" />
          </div>
          <div className="container-trendingprodcuts-chair-details">
            <h3>Cantilever chair</h3>
            <div className="container-trendingprodcuts-chair-details-prices">
              <span id="newprice">$26.00 </span>
              <span id="oldprice">$42.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-trendingprodcuts-card-master-products">
        <div className="container-trendingprodcuts-card-products">
          <div id="productred" className="container-trendingprodcuts-products">
            <div className="container-trendingprodcuts-product">
              <h3>23% off in all products</h3>
              <span id="shopnow">Shop Now</span>
            </div>
            <div className="container-trendingprodcuts-productsimg1">
              <img src={clock} alt="clock" />
            </div>
          </div>

          <div id="productblue" className="container-trendingprodcuts-products" >
            <div className="container-trendingprodcuts-product">
              <h3>23% off in all products</h3>
              <span id="shopnow">View Collection</span>
            </div>
            <div className="container-trendingprodcuts-productsimg2">
              <img src={table} alt="table" />
            </div>
          </div>

          <div className="container-trendingprodcuts-miniproducts">
            <div className="container-trendingprodcuts-miniproduct">
              <div className="container-trendingprodcuts-miniproductimg">
                <img src={minichair1} alt="minichair1" />
              </div>
              <div className="container-miniproducts-nameprice">
                <h3>Executive Seat chair</h3>
                <span id="shopnow">$32.00</span>
              </div>
            </div>

            <div className="container-trendingprodcuts-miniproduct">
              <div className="container-trendingprodcuts-miniproductimg">
                <img src={minichair2} alt="minichair2" />
              </div>
              <div className="container-miniproducts-nameprice">
                <h3>Executive Seat chair</h3>
                <span id="shopnow">$32.00</span>
              </div>
            </div>

            <div className="container-trendingprodcuts-miniproduct">
              <div className="container-trendingprodcuts-miniproductimg">
                <img src={minichair3} alt="minichair3" />
              </div>
              <div className="container-miniproducts-nameprice">
                <h3>Executive Seat chair</h3>
                <span id="shopnow">$32.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
