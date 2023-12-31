import { Link } from "react-router-dom"

interface NavItemProps {
    isOpen: boolean,
    handleToggle: () => void
}


const NavItems: React.FC<NavItemProps> = ({isOpen, handleToggle}) => {

    const handleClick = () => {
        if (isOpen) handleToggle()
    }

    return (
        <>

            <li onClick={handleClick} className="md:py-8 tracking-widest cursor-pointer border-r-4 md:border-r-0 md:border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75">
                <Link to="/"><span className="md:hidden lg:inline-block font-bold tracking-widest mr-2">00</span> HOME</Link>
            </li>
            <li onClick={handleClick} className="md:py-8 tracking-widest cursor-pointer border-r-4 md:border-r-0 md:border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75">
                <Link to="/destination"><span className="md:hidden lg:inline-block font-bold tracking-widest mr-2">01</span> DESTINATION</Link>
            </li>
            <li onClick={handleClick} className="md:py-8 tracking-widest cursor-pointer border-r-4 md:border-r-0 md:border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75">
                <Link to="/crew"><span className="md:hidden lg:inline-block font-bold tracking-widest mr-2">02</span> CREW</Link>
            </li>
            <li onClick={handleClick} className="md:py-8 tracking-widest cursor-pointer border-r-4 md:border-r-0 md:border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75">
                <Link to="/technology"><span className="md:hidden lg:inline-block font-bold tracking-widest mr-2">03</span> TECHNOLOGY</Link>
            </li>
        </>
    )
}

export default NavItems