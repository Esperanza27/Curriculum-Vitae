import logo from "../../assets/icon/Espe.jpg"
const Card = () => {
    return (
        <div className="container bg-black text-white ">
            <div className="row">
                <div className="col-5">
                    <img src={logo} alt="img" style={ {height: "100%", width:"100%"}}/>
                </div>
                <div className="col-6 pt-5 px-2">
                    <h3>PROFILO PROFESSIONALE</h3>
                    <p className="text-white">Sono un profilo junior con una spiccata personalità ed intraprendenza, nonché entusiasta e determinata.
                        Grazie al percorso di studi condotto ho avuto modo di maturare conoscenze su importanti tecnologie prevalentemente di
                        front-end come HTML, CSS, JavaScript e React JS. Sono alla ricerca di un contesto lavorativo dinamico e stimolante, che
                        mi permetta di esprimere forte motivazione, spiccata attitudine al lavoro di squadra, nonché apertura al confronto ed al
                        raggiungimento degli obiettivi comuni ed individuali. La forte passione che ho per il settore garantisce sicuro risultato
                        sia sotto l'aspetto tecnico che per quello gestionale e organizzativo.
                    </p>
                </div>
            </div>

        </div>
    )
};
export default Card;