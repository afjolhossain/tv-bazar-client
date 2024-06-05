import banner2 from "../../public/aboutPage.jpg";
import photo_1 from "../../public/s-1.jpg";
import photo_2 from "../../public/s-2.jpg";
import photo_3 from "../../public/s-3.jpg";
import photo_4 from "../../public/s-4.jpg";

const SalesProduct = () => {
  return (
    <div>
      <h1 className="font-sami-bold text-4xl text-center my-6">
        USE HIGH-QUALITY LED, <br /> HAVE HIGH-EFFICIENCY LUMINESCENCE, & HIGH
        STABILITY
      </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3 p-3">
        <div className="font-sami-bold text-center">
          <img className="w-full h-3/4" src={banner2} alt="" />
          <div>
            <h1 className="text-3xl">
              BEST GUIDE FOR 55″ 4K ULTRA HD SMART TV FOR SALE
            </h1>
            <p className="font-bold">
              Overview The 55-inch size category of 4K TVs is one of the most
              popular among both consumers and TV manufacturers alike.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 text-2xl sm:grid-cols-1 gap-1">
          <div>
            <h1>LEDTVS: THINGS YOU NEED TO KNOW</h1>
            <img src={photo_1} alt="" />
          </div>
          <div>
            <h1>THE ULTIMATE TV BUYER’S GUIDE</h1>
            <img src={photo_2} alt="" />
          </div>
          <div>
            <h1>TOP 5 TV TRENDS WE EXPECT AT CES 2017</h1>
            <img src={photo_3} alt="" />
          </div>
          <div>
            <h1>TOP 10 LED TELEVISIONS UNDER 32 INCHES</h1>
            <img src={photo_4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesProduct;
