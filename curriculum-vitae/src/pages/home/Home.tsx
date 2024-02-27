import eLavorative from "../../assets/img/img-esperienze-lavorative.jpg";
import Card from "../../components/cards/Card";
const Home = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide bg-black" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Card/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={eLavorative} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={eLavorative} alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
        </div>
    )
};
export default Home;