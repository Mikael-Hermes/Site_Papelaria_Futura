import NavLink from "./NavLink"

function NavBar() {

  return (
    <>
      <div className="bg-stone-950 text-stone-50 flex flex-row sticky-top p-5 justify-between">
        <div className="">
          <img src="src/assets/logo.svg" role="img" alt="Papelaria Futura"></img>
        </div>
        
        <div className="">
            <NavLink text="index" href="/"/>
            <NavLink text="other_page" href="/other_page"/>
        </div>
      </div>
    </>
  )
}

export default NavBar
