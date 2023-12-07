const Nav = () => {
    return (
        <>
            {/* <nav className='flex justify-between mt-10 items-center fixed z-20 w-full'> */}
            <nav className='flex fixed z-10 w-full justify-between items-center p-10 md:p-0 lg:mt-10'>
                {/* logo */}
                <div className="md:ml-14">
                    <img src='../../assets/shared/logo.svg' />
                </div>

                {/* nav line */}
                <div className="hidden lg:inline-block h-[0.5px] w-96 bg-gray-700 absolute left-40 z-30">

                </div>
                {/* nav items */}
                <ul className='
                    hidden text-white tracking-widest
                    md:flex md:bg-[#151923] md:space-x-6 md:px-20 font-barlow 
                    lg:px-54 lg:bg-[#979797] lg:space-x-12 lg:bg-opacity-10 lg:backdrop-blur                  
                '>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="hidden lg:inline-block font-barlow font-bold mr-2">00</span> HOME</li>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="hidden lg:inline-block font-barlow font-bold mr-2">01</span> DESTINATION</li>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="hidden lg:inline-block font-barlow font-bold mr-2">02</span> CREW</li>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="hidden lg:inline-block font-barlow font-bold mr-2">03</span> TECHNOLOGY</li>
                </ul>
                <div className="cursor-pointer md:hidden">
                    <img src="../../assets/shared/icon-hamburger.svg"/>
                </div>
            </nav>
        </>
    )
}

export default Nav