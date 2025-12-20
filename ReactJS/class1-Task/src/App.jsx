import CarouselOne from "./components/CarouselOne"
import CarouselTwo from "./components/CarouselTwo"
import Footer from "./components/Footer"
import InnerBox from "./components/InnerBox"
import Navbar from "./components/Navbar"

const App = () => {
    return (
        <div className="main"> 
            <Navbar/>
            <div className="img-container">
                <InnerBox/>
                <Footer/>
            </div>
            <div className="about">
                <div className="about-btn">About Horizon</div>
                <p>At Horizon, we don't just play tennis -- we live it. Since 2021, <br /> our club has been a home for players of all levels, from eager <br />begginers to seasoned pros.</p>
            </div>
            <CarouselOne/>
            <div className="status">
                <h3>A few more facts about us in numbers</h3>
                <div className="datas">
                    <div className="data">
                        <h1>12 000+</h1>
                        <p>Hours of play annually</p>
                    </div>
                    <div className="data">
                        <h1>89%</h1>
                        <p>Player Renention Rate</p>
                    </div>
                    <div className="data">
                        <h1>12,00+</h1>
                        <p>Active Members</p>
                    </div>
                    <div className="data">
                        <h1>125</h1>
                        <p>Annual Tournaments</p>
                    </div>
                </div>
            </div>
            <CarouselTwo/>
        </div>
    )
}

export default App
