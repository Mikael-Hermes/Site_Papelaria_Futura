import Logo from "./Logo"
import NavLink from "./NavLink"
import whatsapp from "../assets/whatsapp.svg"


function NavBar() {

  return (
      <nav className="bg-black text-base-fg flex flex-row p-5 justify-between sticky top-0 z-50">
        <div className="flex items-center-safe">
          <Logo  imgClass="w-16 inline mr-16" />
          <a
          href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_RAW}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Converse no Whatsapp"
          className="flex text-base-fg hover:scale-110"
          >
              <img src={whatsapp} role="img" className="inline w-7 mr-2"></img>
              {import.meta.env.VITE_WHATSAPP}
          </a>
        </div>
        
        <div className="flex items-end">
            <NavLink text="Início" href="/"/>
            <NavLink text="Contato" href="/contatos"/>
            <NavLink text="Serviços" href="/servicos"/>
            <NavLink text="Produtos" href="/produtos"/>
        </div>
      </nav>
  )
}

export default NavBar
