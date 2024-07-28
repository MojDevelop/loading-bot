// eslint-disable-next-line no-unused-vars
import React from 'react';
import backgroundImage from '../assets/tap--img.png';

const AuroraBackground = () => {
    return (
        <div
            className="fixed inset-0 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${backgroundImage})`, zIndex: -1 }}
        ></div>
    );
};

export default AuroraBackground;
