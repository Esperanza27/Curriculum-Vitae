import logo from "../../assets/icon/Espe.jpg"

const MyNavbar = () => {
    return (
        <div>
            <div className="bg-black w-100 sticky-top d-flex justify-content-around p-1">
                <img src={logo} style={ {height: "30px", width:"30px"}}/>
                <a href="#" className="nav-link text-light"> Home</a>
                <a href="#" className="nav-link text-light"> My Presentation</a>
                <a href="#" className="nav-link text-light"> Competenze</a>
                <a href="#" className="nav-link text-light"> Studi</a>
                <a href="#" className="nav-link text-light"> Esperienze </a>
            </div>
        </div>
    )
};
export default MyNavbar;