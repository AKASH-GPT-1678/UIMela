import React from "react";

export const SpinButton = () => {
  return (
    <>
      {/* <button className='p-3 px-6 bg-blue-400 rounded-lg cursor-pointer font-bold text-white animate-round'>Spin Button</button> */}
      <div className="border-10 border-red-500 h-20 w-20 rounded-full animate-round relative"></div>
      <div className=" border-10 border-red-500   border-t-white h-20 w-20 rounded-full animate-round  absolute"></div>
    </>
  );
};
