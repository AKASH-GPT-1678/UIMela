import React from "react";

const BlowCard = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-52 w-96 border-2 hover:animate-blow group">
        <div className="flex h-full items-center justify-center">
          <div className="flex gap-1">
            <span className="border-b-4 font-bold text-3xl">UI</span>
            <div
            className="relative group-hover:block group-hover:animate-sub-blow text-black  "
            
            >

          
             <p className="border-b-4 font-bold text-3xl  text-black  ">VERSE</p>
              </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlowCard;
