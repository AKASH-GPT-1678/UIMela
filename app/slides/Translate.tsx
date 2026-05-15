import React from "react";

const Translate = () => {
  return (
<div className="w-screen h-screen flex items-center justify-center bg-gray-900 perspective-[1000px]">

  {/* Dice Container */}
  <div className="relative w-40 h-40 preserve-3d animate-spin-slow">

    {/* Front */}
    <div className="absolute inset-0 bg-red-500 border-4 border-white
                    flex items-center justify-center text-4xl text-white
                    [transform:translateZ(80px)]">
      1
    </div>

    {/* Back */}
    <div className="absolute inset-0 bg-blue-500 border-4 border-white
                    flex items-center justify-center text-4xl text-white
                    [transform:rotateY(180deg)_translateZ(80px)]">
      2
    </div>

    {/* Right */}
    <div className="absolute inset-0 bg-green-500 border-4 border-white
                    flex items-center justify-center text-4xl text-white
                    [transform:rotateY(90deg)_translateZ(80px)]">
      3
    </div>

    {/* Left */}
    <div className="absolute inset-0 bg-yellow-500 border-4 border-white
                    flex items-center justify-center text-4xl text-black
                    [transform:rotateY(-90deg)_translateZ(80px)]">
      4
    </div>

    {/* Top */}
    <div className="absolute inset-0 bg-purple-500 border-4 border-white
                    flex items-center justify-center text-4xl text-white
                    [transform:rotateX(90deg)_translateZ(80px)]">
      5
    </div>

    {/* Bottom */}
    <div className="absolute inset-0 bg-pink-500 border-4 border-white
                    flex items-center justify-center text-4xl text-white
                    [transform:rotateX(-90deg)_translateZ(80px)]">
      6
    </div>

  </div>
</div>
  );
};

export default Translate;
