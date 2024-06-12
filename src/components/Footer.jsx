import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black overflow-hidden'>
            <div className="container mx-auto px-3 pt-[50px]">
                <h3 className=' text-3xl sm:text-4xl text-white leading-7 sm:leading-[57px] font-bold text-center pb-2 sm:pb-4'>AI STOCKS</h3>
                <p className='text-lightWhite font-normal text-sm sm:text-base leading-5 sm:leading-6 max-w-[261px] mx-auto text-center'>Empowering Your Financial Future with Intelligent Investments</p>
                <p className='text-white font-bold text-xl leading-7 pt-7 sm:pt-10 pb-3 sm:pb-4 text-center'>Disclaimer</p>
                <p className='text-lightWhite text-sm sm:text-base font-normal sm:leading-6 leading-5 max-w-[1119px] mx-auto text-center pb-8 sm:pb-[54px]'>This website is not a news agency, information website, or blog. It is a webpage aimed at promotional publications that use the technique of storytelling to illustrate the scope of the services and products offered. Therefore, the story told on this page is an infomercial or advertisement for informational and functional purposes, for an understanding of the potential of what is proposed general, risk warning. Investing activities involve a high level of risk and may result in the total loss of the amount invested. For this reason, these activities may not be suitable for every type of investor. You should not invest money that you cannot afford to lose.</p>
            </div>
            <div className='h-[1px] w-full bg-footerEllipse'></div>
            <div className="container mx-auto px-3 max-w-[1164px] py-5 sm:py-[30px]">
                <p className='text-lightWhite text-center'>Copyright@{new Date().getFullYear()} | AI Stocks</p>
            </div>
        </div>
    )
}

export default Footer
