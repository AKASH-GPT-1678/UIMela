const NeonPulse = () => {
  return (
    <>
      <div>
        <div className={"flex  p-4 relative"}>
          <div
            className={
              "border-2 border-green-200 h-16 w-40 absolute flex items-center justify-center"
            }
          >
            <span className={"text-white font-bold"}>Akash</span>
          </div>
          <div
            className={
              "border-3 border-green-200 h-16 w-40 absolute animate-float"
            }
          ></div>
        </div>
      </div>
    </>
  );
};

export default NeonPulse;
