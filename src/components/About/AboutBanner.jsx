import banner33 from "../../../public/bannerAbout.jpg";

const AboutBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${banner33})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-sm">
            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
