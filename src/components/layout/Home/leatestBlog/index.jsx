import './styles.css'
import enviroment1 from "../../../../assets/enviroment1.svg"
import enviroment2 from "../../../../assets/enviroment2.svg"
import enviroment3 from "../../../../assets/enviroment3.svg"

export default function LeatestBlog() {
    return (
        <div className='container-leatestblog'>
            <h3>Leatest Blog</h3>

            <div className='container-leatestblog-cards'>
                <div className='container-leatestblog-card'>
                    <div className='container-leatesblog-img'>
                    <img src={enviroment1} alt="enviroment1" />
                    </div>
                    <div className='container-leatestblog-locationdate'>
                        <span className='leatestblog-locationdate-span1'>Saber Ali</span>
                        <span className='leatestblog-locationdate-span2'>21 August, 2020</span>
                    </div>

                    <h4>Top esssential Trends in 2021</h4>
                    <p>More off this less hello samlande lied much <br></br>over tightly circa horse taped mightly</p>
                    <button>Read More</button>
                </div>

                <div className='container-leatestblog-card'>
                    <div className='container-leatesblog-img'>
                    <img src={enviroment2} alt="enviroment2" />
                    </div>
                    <div className='container-leatestblog-locationdate'>
                        <span className='leatestblog-locationdate-span1'>Surfauxion</span>
                        <span className='leatestblog-locationdate-span2'>21 August, 2020</span>
                    </div>

                    <h4>Top esssential Trends in 2021</h4>
                    <p>More off this less hello samlande lied much <br></br>over tightly circa horse taped mightly</p>
                    <button>Read More</button>
                </div>

                <div className='container-leatestblog-card'>
                    <div className='container-leatesblog-img'>
                    <img src={enviroment3} alt="enviroment3" />
                    </div>
                    <div className='container-leatestblog-locationdate'>
                        <span className='leatestblog-locationdate-span1'>Saber Ali</span>
                        <span className='leatestblog-locationdate-span2'>21 August, 2020</span>
                    </div>

                    <h4>Top esssential Trends in 2021</h4>
                    <p>More off this less hello samlande lied much <br></br>over tightly circa horse taped mightly</p>
                    <button>Read More</button>
                </div>
            </div>

        </div>
    )
}

