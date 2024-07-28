// eslint-disable-next-line no-unused-vars
import React from 'react';
import AuroraBackground from '../components/AuroraBackground';
import Loading from 'react-loading';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { PiYoutubeLogoLight } from 'react-icons/pi';
import clsx from "clsx";

const LoadingComponent = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-50 overflow-hidden">
            <AuroraBackground />
            <div className={clsx(
                'loading-content', 'flex flex-col items-center justify-center gap-6 p-4 sm:gap-8 sm:p-6 md:gap-10 md:p-10 text-center'
            )}>
                <div className="mb-10 sm:mb-20">
                    <Loading type="bars" color="#fff" />
                    <h1 className="text-white text-xl sm:text-2xl">Loading</h1>
                </div>
                <span className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white"> Kiwi Swap Token </span>
                <div className="flex gap-5 justify-center items-center">
                    <FaTelegramPlane size={30} className="sm:size-40" color="#fff" />
                    <RiTwitterXFill size={30} className="sm:size-40" color="#fff" />
                    <PiYoutubeLogoLight size={30} className="sm:size-40" color="#fff" />
                </div>
                <h1 className="text-white text-lg sm:text-xl"> Stay Tuned </h1>
                <span className="text-white text-sm sm:text-base"> More Info in official channels </span>
            </div>
        </div>
    );
}

export default LoadingComponent;
