const Loading = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-white fixed top-0 left-0 z-50 flex flex-col lg:gap-10 gap-5 justify-center items-center tracking-tight">
      <div className="container">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <h1 className="lg:text-3xl text-xl font-semibold">Loading</h1>
    </div>
  );
};

export default Loading;
