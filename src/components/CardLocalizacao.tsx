import Card from "./Card"
import MapWidget from "./MapWidget"
import logo from "../assets/LOGO FUTURA.png"


function CardLocalizacao() {
    return (
        <Card className="overflow-hidden rounded-4xl bg-base-dark-bg text-base-fg border-2 border-base-fade-fg shadow-lg shadow-base-fade-fg/50">
            <div className=' text-3xl text-center p-2 border-b-2 border-base-fade-fg bg-black'>
                Localização
            </div>
            <div className='grid grid-cols-2 bg-base-bg'>
                <div className="relative">
                <img src={logo} alt="" className="absolute inset-0 h-full w-full object-cover" />
                </div>
                <MapWidget className=''/>
            </div>
            <div className=' text-2xl text-center p-2 border-t-2 border-base-fade-fg'>
                R. Platina, 1156 - Calafate, Belo Horizonte - MG, 30411-330
            </div>
        </Card>
    )

}

export default CardLocalizacao