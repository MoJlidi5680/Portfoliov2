import React from "react";

const BlurBlob = ({ position, size, color, blur }) => {
  return (
    <div
      className="absolute rounded-full animate-[ping_6s_linear_infinite]"
      style={{
        top: position.top,
        left: position.left,
        width: size.width,
        height: size.height,
        backgroundColor: color,
        filter: `blur(${blur})`,
      }}
    ></div>
  );
};

export default BlurBlob;
