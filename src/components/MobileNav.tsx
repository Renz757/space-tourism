import NavItems from "./NavItems"

interface MobileNavProps {
    isOpen: boolean,
    handleToggle: () => void
}

const MobileNav: React.FC<MobileNavProps> = ({isOpen, handleToggle}) => {

    return (
        <div className={`${isOpen ? `translate-x-[0]` : `translate-x-[100%]`} md:hidden w-8/12 h-screen bg-[#979797] bg-opacity-0 backdrop-blur-2xl absolute z-20 right-0 
                         transition-all ease-in-out delay-50
    `}>
            <div onClick={handleToggle} className="relative p-12 flex justify-end items-center cursor-pointer">
                <img src="../../assets/shared/icon-close.svg" className="fill-tropicalBlue justify-slef-center" />
            </div>

            <ul className="w-10/12 ml-auto mt-7 text-white space-y-5 font-barlow text-lg">
                <NavItems isOpen={isOpen} handleToggle={handleToggle}/>
            </ul>
        </div>
    )
}

export default MobileNav