import logo from "../assets/LOGO FUTURA.png"

function Logo( {imgClass} : {imgClass: string}) {
    return (
        <img src={logo} role="img" alt="Papelaria Futura" className={imgClass}></img>
    )
}

export default Logo