import './styles.css'
import brands from "../../../assets/brands.svg"

export default function Brands() {
    return (
        <div className='container-brands'>
            <img src={brands} alt="brands" />
        </div>
    )
}

