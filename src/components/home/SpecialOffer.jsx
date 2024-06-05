/* eslint-disable react/no-unescaped-entities */

import offer from "../../../public/offer.jpg";
const SpecialOffer = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid md:grid-cols-2 sm:md:grid-cols-1">
        <img src={offer} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">We Provide Special Offer On</h1>
          <h1 className="text-3xl font-bold">
            Samsung 65" 4K UHD HDR OLED Tizen Smart TV QN65S92DAFXZC - 2024 -
            Graphite Black
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
