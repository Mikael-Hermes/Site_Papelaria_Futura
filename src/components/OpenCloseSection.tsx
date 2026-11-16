import { Link } from "@tanstack/react-router"

//
function OpenCloseSection({extraClass = "", image, title, link} : {extraClass: string ,image: string, title: string, link: string}) {
    return (
        <Link to={link}>
            <div className={`@container group flex bg-base-dark-bg text-base-fg ${extraClass}`}>
                <div
                    className="bg-base-bg shrink-0 w-0 overflow-hidden transition-[width] duration-500 group-hover:w-[40cqw] [clip-path:polygon(0_0,100%_0,calc(100%-4rem)_100%,0_100%)]"
                >
                    <img src={image} alt="" className="h-full w-[40cqw] max-w-none object-cover" />
                </div>
                <div className="min-w-0 flex-1 justify-center self-center text-center">
                    <h1 className="text-8xl transition-all duration-500 group-hover:text-6xl"> {title} </h1>
                </div>
            </div>
        </Link>
    )
}

export default OpenCloseSection