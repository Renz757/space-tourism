import { Link } from "react-router-dom"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

interface NavProps {
    isOpen: boolean,
    handleToggle: () => void
}

const Nav: React.FC<NavProps> = ({isOpen, handleToggle}) => {


    return (
        <>
            {/* <nav className='flex justify-between mt-10 items-center fixed z-20 w-full'> */}
            <nav className='flex fixed z-20 w-full justify-between items-center p-10 md:p-0 lg:mt-10'>
                {/* logo */}
                <div onClick={() => {if (isOpen) handleToggle()}} className="md:ml-14 cursor-pointer">
                    <Link to="/">
                        <img src='../../assets/shared/logo.svg' />
                    </Link>
                </div>

                {/* nav line */}
                <div className="hidden lg:block max-w-2xl relative">
                    <span className="h-[1px] w-96 bg-gray-700 absolute right-0 left-[-120px] z-10"></span>
                </div>
                {/* nav items */}
                <ul className='
                    hidden text-white tracking-widest
                    md:flex md:bg-[#151923] md:gap-5 md:px-20 font-barlow 
                    lg:px-36 lg:bg-[#979797] lg:space-x-12 lg:bg-opacity-10 lg:backdrop-blur                  
                '>
                    <NavItems isOpen={isOpen} handleToggle={handleToggle}/>
                </ul>

                {/* Hamburger Icon */}
                <div onClick={handleToggle} className="cursor-pointer md:hidden">
                    <img src="../../assets/shared/icon-hamburger.svg" />
                </div>
            </nav>
            <MobileNav handleToggle={handleToggle} isOpen={isOpen} />
        </>
    )
}

export default Nav