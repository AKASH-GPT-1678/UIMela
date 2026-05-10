"use client";
import React from "react";

const Temp = () => {
  const divRef = React.useRef<HTMLDivElement>(null);


  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.transform = "translateX(100px)";
    }
  };
const [position, setPosition] = React.useState({
  x: 0,
  y: 0,
});

React.useEffect(() => {
  const handleMouseMove = (event) => {
    const newPosition = {
      x: event.clientX,
      y: event.clientY,
    };

    setPosition(newPosition);

    console.log(newPosition);
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

React.useEffect(() => {
  if (divRef.current) {
    divRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
  }
}, [position]);

  return (
    <div>
      <div
        ref={divRef}
        className="bg-red-500 h-10 w-10 transition-transform duration-5000 delay-200 ease-in-out"
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Temp;
