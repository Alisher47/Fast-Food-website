import React, { useState } from "react";
import Container from '../../Home/Bottom_Rectangle/bottomModal';

const BreadCrumbs = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleMouseEnter = (buttonId) => {
        setHoveredButton(buttonId);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const buttons = [1, 2, 3, 4, 5, "..."];

    return (
        <div>
            <div className="flex justify-center items-center mt-20"> {/* Adding top margin to buttons */}
                <div className="flex space-x-2">
                    {buttons.map((buttonId) => (
                        <button
                            key={buttonId}
                            onMouseEnter={() => handleMouseEnter(buttonId)}
                            onMouseLeave={handleMouseLeave}
                            className={`border border-black w-16 h-16 rounded-[16px] transition-all duration-300 ${hoveredButton === buttonId
                                    ? "bg-black text-white"
                                    : "bg-white text-black"
                                }`}
                        >
                            {buttonId}
                        </button>
                    ))}

                </div>

            </div>
            <div className="mt-40">
                <Container />
            </div>
        </div>
    );
};

export default BreadCrumbs;
