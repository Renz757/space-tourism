import { useState } from "react"
import data from "../../data.json"
import DestinationNav from "../components/DestinationNav"

interface Item {
  name: string;

}

const Destination: React.FC = () => {

  // const [selectedDestination, setSelectedDestination] = useState<string>("Moon")

  // const destinationData = data.filter(destination => "destination")

  return (
    <div className="relative h-screen">
      {/* Background Image Mobile */}
      <div className='absolute inset-0 overflow-hidden md:hidden'>
        <img
          className='h-full w-full object-cover object-center'
          src='../../assets/destination/background-destination-mobile.jpg'
        />
      </div>
      {/* Background Image Tablet */}
      <div className='absolute inset-0 overflow-hidden'>
        <img
          className='hidden md:block h-full w-full object-cover object-center'
          src='../../assets/destination/background-destination-tablet.jpg'
        />
      </div>
      {/* Background Image Desktop */}
      <div className='absolute inset-0 overflow-hidden'>
        <img
          className='hidden lg:block h-full w-full object-cover object-center'
          src='../../assets/destination/background-destination-desktop.jpg'
        />
      </div>

      <div className="relative z-10 pt-36 overflow-auto">
          <h4 className="text-xl text-white tracking-widest font-barlow text-center md:text-left md:ml-14 lg:ml-28 lg:pt-5">
            <span className="text-[#979797] tracking-widest mr-5">01</span>
            PICK YOUR DESTINATION
          </h4>

          <div className="flex flex-col lg:flex-row lg:space-x-4 items-center lg:justify-between mt-5 md:w-10/12 mx-auto">
            {/* Moon Image Mobile */}
            <div className="mt-8 md:hidden ">
              <img src="../../assets/destination/image-moon.png"
                className="w-[170px] h-[170px]"
              />
            </div>
            {/* Moon Image Tablet */}
            <div className="mt-8 self-center hidden md:block lg:hidden">
              <img src="../../assets/destination/image-moon.png"
                className="w-[300px] h-[300px]"
              />
            </div>
            {/* Moon Image Desktop */}
            <div className="mt-8 hidden lg:block">
              <img src="../../assets/destination/image-moon.png"
                className="w-[445px] h-[445px]"
              />
            </div>

            <div className="flex flex-col items-center lg:items-start mt-5 md:mt-14 md:w-10/12 lg:w-6/12 lg:pl-7 mx-auto pb-20">
              <DestinationNav />
              <h1 className="text-[56px] lg:text-[100px] text-white font-bellefair mt-4">MOON</h1>
              <p className="text-center lg:text-left text-tropicalBlue font-barlow tracking-wide leading-8 w-[327px] md:w-[573px] lg:w-[444px] mx-auto lg:m-0">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
              {/* Line */}
              <div className="w-[327px] md:w-[573px] lg:w-[444px] h-[.3px] bg-[#979797] my-7"></div>

              <div className="text-white flex flex-col md:flex-row md:justify-between w-6/12">
                <div className="text-center">
                  <p className="text-base font-barlow">AVG. DISTANCE</p>
                  <h3 className="font-bellefair text-[28px] mt-4">384,400 KM</h3>
                </div>
                <div className="text-center">
                  <p className="text-base font-barlow">EST. TRAVEL TIME</p>
                  <h3 className="font-bellefair text-[28px] mt-4">3 DAYS</h3>
                </div>
              </div>
            </div>
          </div>


 





      </div>

    </div>
  )
}

export default Destination