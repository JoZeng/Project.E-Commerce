import './styles.css'
import chairstylish2 from "../../../../assets/chairstylish2.svg"

export default function DiscountItem() {
    return (
        <div className='container-discountitem'>
            <div className='container-discountitem-card1'>
            <h3>Discount Item</h3>
          
                <ul>
                    <li>Wood Chair</li>
                    <li>Plastic Chair</li>
                    <li>Sofa Collection</li>
                </ul>

                </div>

                <div className='container-discountitem-card2'>
                    <div className='container-discountitem-subcard'>
                        <h4>20% Discount Of All Products</h4>
                        <span>Eams Sofa Compact</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br>
                        </br> feugiat habitasse nec, bibendum condimentum.</p>
                        <ul className='container-discountitem-list1'>
                            <li>Material expose like metals</li>
                            <li>Clear lines and geomatric figures</li>
                        </ul>
                        <ul className='container-discountitem-list2'> 
                        <li>Simple neutral colours.</li>
                            <li>Material expose like metals</li>
                        </ul>
                        <button>Shop Now</button>
                    </div>
                    <div className='container-discountitem-img'>
                            <img src={chairstylish2} alt="chairstylish2" />
                        </div>
                </div>

            </div>


    )
}

