// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AuroraBackground } from './Aurora-background.jsx';
import Loading from 'react-loading';
import { FaTelegramPlane } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
import { PiYoutubeLogoLight } from 'react-icons/pi';
import clsx from "clsx";

const LoadingComponent = () => {
    return (
        <div className="loading-container">
            <AuroraBackground />
            <div className={clsx(
                'loading-content','flex flex-col items-center justify-center gap-10'
            )}>
                <Loading type="bars" color="#fff" />
                <div className={"flex gap-5 justify-center items-center"}>
                    <FaTelegramPlane size={40} color="#fff"/>
                    <RiTwitterXFill size={40} color="#fff"/>
                    <PiYoutubeLogoLight size={40} color="#fff"/>
                </div>
                <h1> Stay Tuned  </h1>
                <span> More Info  in official channels  </span>
            </div>
        </div>
    );
}

export default LoadingComponent;
