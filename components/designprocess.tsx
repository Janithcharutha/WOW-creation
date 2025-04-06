'use client';

import { FaFileAlt, FaSearch, FaPencilRuler, FaComments, FaCheckCircle } from 'react-icons/fa';

export default function DesignProcess() {
  const phases = [
    { icon: <FaFileAlt className="text-[#A5158C] text-7xl" />, title: 'Brief' },
    { icon: <FaSearch className="text-[#A5158C] text-7xl" />, title: 'Research' },
    { icon: <FaPencilRuler className="text-[#A5158C] text-7xl" />, title: 'Sketch & Design' },
    { icon: <FaComments className="text-[#A5158C] text-7xl" />, title: 'Feedback' },
    { icon: <FaCheckCircle className="text-[#A5158C] text-7xl" />, title: 'Delivery' },
  ];

  return (
    <section className="py-6 px-8 bg-white text-center mx-4">
     {/* <h2 className="text-2xl font-bold text-gray-900 mb-4  text-left">Brand Identity Design Process</h2>
    
      <div className="w-20 h-1 bg-[#fdd302] mx-left mb-5 "></div> */}

      {/* Horizontal Phases Layout */}
      <div className="flex justify-between items-center space-x-12"> {/* Spread items horizontally with space in between */}
        {phases.map((phase, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center justify-center">
              {phase.icon}
            </div>
            <p className="mt-4 font-semibold text-gray-900 text-xl">{phase.title}</p> {/* Slightly increased text size */}
          </div>
        ))}
      </div>
    </section>
  );
}
