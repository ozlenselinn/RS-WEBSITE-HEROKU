import React from "react";

const ImageHoverShadow = ({ imagePath }) => {
    return (
        <div className="img-wrapper">
            <img
                src={imagePath}
                alt=""
                className="hover-shadow"
            />
        </div>
    );
    };
    export default ImageHoverShadow;