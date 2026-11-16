import Logo from "./Logo"

function Footer() {
    return (
        <footer className=" bg-mist-950 text-mist-50 text-left">
            <div className="mx-8 grid grid-cols-4 gap-4 pt-4">
                <div><Logo imgClass="w-64" /></div>
                <div>Horários</div>
                <div>Contato</div>
                <div>Links</div>

                <div className="pr-8 mb-4">
                    R. Platina, 1156 - Calafate, Belo Horizonte - MG, 30411-330
                </div>
                <div></div>
                <div></div>
                <div></div>


            </div>
        </footer>
    )
}

export default Footer