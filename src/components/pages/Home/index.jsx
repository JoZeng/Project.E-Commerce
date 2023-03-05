import "./styles.css"
import Header from "../../layout/Header";
import Navbar from "../../layout/Navbar"
import Footer from "../../layout/Footer";
import Promotional from "../../layout/Home/promotional";
import FeaturedProducts from "../../layout/Home/featuredProducts"

export default function Home() {

  return (
    <div className="container-home">
      <Header/>
      <Navbar/>
      <Promotional/>
      <FeaturedProducts/>
      <Footer/>
    </div>
  )
}

