import banner45 from "../../../public/applications-7025904_1280.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner45})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-full">
          <h1 className="mb-5 text-6xl font-bold">CHOOSE MORE</h1>
          <p className="mb-5 text-2xl">
            Enjoy your favourite movies, TV series, games, and browse the
            internet with our Smart TVs, with sizes from 24 inches to 62 inches
            and above, offering crisp 4K UHD image quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
