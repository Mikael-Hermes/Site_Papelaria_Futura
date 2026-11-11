import NavLink from "./NavLink"

function NavBar() {

  return (
      <nav className="bg-base-dark-bg text-base-fg flex flex-row p-5 justify-between sticky top-0 z-50">
        <div className="flex items-end">
          <img src="src/assets/logo.jpeg" role="img" alt="Papelaria Futura" className="w-16 inline mr-16"></img>
          <a
          href={import.meta.env.VITE_WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Converse no Whatsapp"
          className="flex text-base-fg hover:scale-110"
          >
              <img src="src/assets/whatsapp.svg" role="img" className="inline w-7 mr-2"></img>
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
