import React from 'react';
import { StasticsData } from './common/helper';
const Stactic = () => {
    return (
        <div className='py-7 sm:pt-12 md:py-24 lg:py-[151px] bg-no-repeat bg-cover bg-left relative overflow-x-clip'>
            <div className="sm:flex hidden h-[340px] w-[340px] bg-ellipseGradient blur-[150px] animate-pulse absolute bottom-0 left-[-20%] pointer-events-none"></div>
            <div className="sm:flex hidden h-[340px] w-[340px] bg-ellipseGradient blur-[150px] animate-pulse absolute top-[-15%] right-[-20%] pointer-events-none"></div>
            <div className='container max-w-[1164px] mx-auto px-3'>
                <h2 className='text-white font-bold text-3xl leading-7 lg:leading-12 lg:text-5xl text-center'><span className='text-gradient bg-gradient-to-b from-skyBlue to-lightBlue'>Stactic</span> For Today</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {StasticsData.map((item, index) => (
                        <div key={index} className='flex  items-center flex-col pt-7 sm:pt-8 md:pt-14 lg:pt-24'>
                            <div className='flex justify-center items-center rounded-full p-2  bg-gradient-to-b from-skyBlue to-lightBlue max-w-[170px] min-h-[170px]  lg:max-w-[270px] lg:min-h-[270px] w-full '>
                                <div className='bg-black rounded-full h-full w-full flex items-center justify-center'>
                                    <h4 className='text-white font-bold  leading-25 text-5xl lg:text-8xl text-center'>{item.number}</h4>
                                </div>
                            </div>
                            <p className={`pt-3 sm:pt-8 lg:pt-11 font-semibold text-2xl md:text-4xl text-white text-center leading-7 lg:leading-10 ${index === 0 ? "max-w-[262px]" : index === 1 ? "max-w-[309px]" : index === 2 ? "max-w-[327px]" : ""}`}>{item.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Stactic;

