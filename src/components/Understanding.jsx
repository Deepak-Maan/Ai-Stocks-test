import React from 'react'
import { AccountData, InvestCards } from './common/helper'

const Understanding = () => {
    return (
        <div className=" lg:pt-[200x] lg:pb-0  sm:pt-20 py-10 ">
            <div className='container max-w-[1164px] px-3 mx-auto'>
                <h2 className='text-3xl leading-7 lg:leading-12 lg:text-5xl font-bold text-white max-w-[946px] text-center mx-auto'>Understanding <span className='text-gradient  bg-gradient-to-b from-skyBlue to-lightBlue'>Leveraged</span> Accounts and <span className="text-gradient  bg-gradient-to-b from-skyBlue to-lightBlue">Buying Power</span></h2>
                <p className='sm:text-base text-sm font-normal leading-4 sm:leading-6 text-lightWhite max-w-[946px] text-center mx-auto pt-2 sm:pt-4'>Trading with leveraged accounts in CFDs provides traders with increased buying power, enabling them to attain superior results across various markets. By amplifying potential returns and accessing additional capital, traders can capitalize on market opportunities more effectively, enhancing their overall trading performance.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 pt-5 sm:pt-[60px] gap-4 relative z-[10]">
                    {InvestCards.map((data, index) => (
                        <div key={index} className='max-w-[525px] mx-auto hover:scale-95 duration-300 sm:pt-[25px] p-2 rounded-[15px] sm:ps-[25px]  sm:pr-[30px] min-h-[150px] md:min-h-[260px] max-h-[260px]  bg-gradient-to-r from-skyBlue to-lightBlue flex gap-4'>
                            <img className='h-[72px] w-[72px] object-cover' src={data.Img} alt="investersImg" />
                            <p className='text-white font-normal text-sm  sm:text-base leading-5'>
                                <span className=" font-extrabold italic ">{data.name}</span> {data.title}
                            </p>
                        </div>
                    ))}
                    {AccountData.map((data, index) => (
                        <div key={index} className='max-w-[471px] mx-auto hover:scale-95 duration-300 min-[1020px]:ml-[10px] min-[1040px]:ml-[45px] lg:-translate-y-[80px] p-5 border bg-white border-lightWhite rounded-[15px]'>
                            <p className='text-gradient font-bold text-2xl leading-7 pb-[15px] bg-accountTittleGradient'>{data.title}</p>
                            <div className="flex justify-between">
                                <p className='text-lightBlack text-base font-normal pb-1 sm:pb-[10px]'>{data.personInvested}</p>
                                <p className='text-lightBlack text-base font-bold leading-6'>{data.personInvestment}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className='text-lightBlack text-base font-normal pb-1 sm:pb-[10px]'>{data.leverage}</p>
                                <p className='text-black text-base font-bold leading-6'>{data.leverageAmount}</p>
                            </div>
                            <div className="flex justify-between pb-2 sm:pb-[25px]">
                                <p className='text-black text-base font-normal pb-1 sm:pb-[10px]'>{data.buyingPower}</p>
                                <p className='text-black text-base font-bold leading-6'>{data.buyingPowerValue}</p>
                            </div>
                            <img className='pb-2 sm:pb-[25px]' src={data.img} alt="graphImg" />
                            <div className="bg-white w-full shadow-md rounded-[10px] p-2">
                                <p className='italic text-green text-lg font-semibold'>
                                    <span className='  font-bold text-3xl2'>{data.earningValue}</span>{data.earningReturn}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center"><button className='border border-white py-3 px-6 bg-gradient-to-r from-skyBlue to-lightBlue mt-5 sm:mt-[60px] '>Maximize Your Profit</button></div>
                <p className='text-sm sm:text-base font-normal leading-4 sm:leading-6 text-lightWhite pt-2 sm:pt-4 text-center '>With Leveraged Accounts and Enhanced Buying Power Today!</p>
            </div>
        </div>
    )
}

export default Understanding
