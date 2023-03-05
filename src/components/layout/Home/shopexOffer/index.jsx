import './styles.css'
import freedelivery from "../../../../assets/freedelivery.svg"
import cashback from "../../../../assets/cashback.svg"
import premium from "../../../../assets/premium.svg"
import hourssupport from "../../../../assets/hourssupport.svg"

export default function ShopexOffer() {
    return (
        <div className='container-shopexoffer'>
            <div className='container-shopexoffer-h3'>
                <h3>What Shopex Offer!</h3>
            </div>

            <div className='container-shopexoffer-cards'>
                <div className='container-shopexoffer-cards-card'>
                    <div>
                    <img src={freedelivery} alt="freedelivery" />
                    </div>
                    <span>24/7 Support</span>
                    <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Massa purus gravida.</p>
                </div>

                <div className='container-shopexoffer-cards-card'>
                    <div>
                    <img src={cashback} alt="cashback" />
                    </div>
                    <span>24/7 Support</span>
                    <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Massa purus gravida.</p>
                </div>

                <div className='container-shopexoffer-cards-card'>
                    <div>
                    <img src={premium} alt="premium" />
                    </div>
                    <span>24/7 Support</span>
                    <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Massa purus gravida.</p>
                </div>

                <div className='container-shopexoffer-cards-card'>
                    <div >
                    <img src={hourssupport} alt="hourssupport" />
                    </div>
                    <span>24/7 Support</span>
                    <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit.<br></br> Massa purus gravida.</p>
                </div>
            </div>
            
        </div>
    )
}

