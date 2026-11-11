
import { useLocation } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'


function NavLink({text, href} : {text: string, href: string}) {
    const location = useLocation()
    console.log(location)
    
    var underline: string = ""
    if(location.href == href){
        underline = "underline"
    }


  return (
    <>
      <Link to={href} className={"text-base-fg hover:text-base-fade-fg hover:scale-110 mx-4 " + underline}>
        {text}
      </Link>
    </>
  )
}

export default NavLink