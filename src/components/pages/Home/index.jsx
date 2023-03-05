import "./styles.css"
import Header from "../../layout/Header";
import Navbar from "../../layout/Navbar"
import Footer from "../../layout/Footer";
import Promotional from "../../layout/Home/promotional";
import FeaturedProducts from "../../layout/Home/featuredProducts"
import LeatestProducts from "../../layout/Home/leatestProducts"
import ShopexOffer from "../../layout/Home/shopexOffer"
import UniqueFeatures from "../../layout/Home/uniqueFeatures"
import TrendingProducts from "../../layout/Home/trendingProducts"
import DiscountItem from "../../layout/Home/discountItem"
import TopCategories from "../../layout/Home/topCategories";
import UpdateBySubscribe from "../../layout/Home/updateBySubscribe";
import LeatestBlog from "../../layout/Home/leatestBlog";
import Brands from "../../layout/Brands";



export default function Home() {

  return (
    <div className="container-home">
      <Header/>
      <Navbar/>
      <Promotional/>
      <FeaturedProducts/>
      <LeatestProducts/>
      <ShopexOffer/>
      <UniqueFeatures/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategories/>
      <UpdateBySubscribe/>
      <LeatestBlog/>
      <Brands/>
      <Footer/>
    </div>
  )
}

