const Nav = () => {
    return (
        <>
            <nav className='flex justify-between mt-10 items-center relative'>
                {/* logo */}
                <div className="ml-14">
                    <img src='../../assets/shared/logo.svg' />
                </div>

                {/* nav line */}
                <div className="h-[0.5px] w-96 bg-gray-700 absolute left-48">

                </div>
                {/* nav items */}
                <ul className='
                    flex items-center space-x-8
                    text-white text-lg font-barlow px-64
                    bg-tropicalBlue bg-opacity-5
                '>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="font-barlow font-bold">00</span> CREW</li>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="font-barlow font-bold">01</span> HOME</li>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="font-barlow font-bold">02</span> DESTINATION</li>
                    <li className="py-8 cursor-pointer border-b-4 border-tropicalBlue border-opacity-0 hover:border-white transition ease-in-out delay-75"><span className="font-barlow font-bold">03</span> TECHNOLOGY</li>
                </ul>
            </nav>
        </>
    )
}

export default Nav