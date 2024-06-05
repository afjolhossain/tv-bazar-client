import person_1 from "../../../public/car-1.jpg";
import person_2 from "../../../public/David-M-e1482944517710.jpg";
import person_3 from "../../../public/Melissa-M-e1482946329588.jpg";
import person_4 from "../../../public/tony-1.jpg";

const ClientReview = () => {
  return (
    <div className="py-6 mt-3">
      <h1 className="text-center font-bold text-2xl mt-5">
        Customer Satisfaction Drives Us
      </h1>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full ">
          <div className="w-3/4 mx-auto text-center mt-7">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={person_1} />
              </div>
            </div>
            <h3 className="font-bold text-red-700">Stan Wilkes</h3>
            <h2 className="mt-1">Executive Director</h2>
            <h6 className="font-bold">
              I speak for the trolley district when I tell you how pleased we
              are with the web site you designed for us. The district needed a
              site that addressed varied aspects of our operation. You have met
              those needs and then some! We have had nothing but rave comments
              about the site from those who are closest to it and rely on it the
              most. I personally want to thank you and your staff for their
              patience and diligence in promptly meeting each of our requests
              for the site during its development.
            </h6>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="w-3/4 mx-auto text-center mt-7">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={person_2} />
              </div>
            </div>

            <h3 className="font-bold text-red-700">Aaron Miller</h3>
            <h2 className="mt-1"> President</h2>
            <h6 className="font-bold">
              I have had many websites since the early 90s. Most were like
              pulling teeth to get developed. Not so with the Thrive team. These
              guys are true professionals in every aspect. They listened to my
              needs, offered relevant options, were prompt to respond to all of
              my questions, and most importantly, they never BS’d me about
              anything. This is hands down the most productive site I have ever
              had designed for my company. Kudos to the Thrive folks for making
              it happen! I will be pursing future projects with them and highly
              recommend them to anyone in the market for a professional website.
            </h6>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="w-3/4 mx-auto text-center mt-7">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={person_3} />
              </div>
            </div>

            <h3 className="font-bold text-red-700">Melissa Montiel</h3>
            <h2 className="mt-1">Marketing Director</h2>
            <h6 className="font-bold">
              We have been very happy with our new website! It looks
              professional and very easy to navigate. Our experience with the
              customer service at Thrive has been great. They handle things very
              efficiently and are available for any questions we have. They also
              keep us updated on monthly reports so we know how our site is
              doing. I would recommend Thrive to anyone looking for website
              design or SEO work!
            </h6>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full">
          <div className="w-3/4 mx-auto text-center mt-7">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={person_4} />
              </div>
            </div>

            <h3 className="font-bold text-red-700">Eric Beich</h3>
            <h2 className="mt-1">Marketing Director</h2>
            <h6 className="font-bold">
              Compared to the other companies we have used in the past, Thrive
              has been far and above the best in every area. While building our
              new web site, the customer service has been prompt and
              straightforward and the actual services are well documented and
              logical to our needs. We are very excited to be working with Matt
              and the rest of the team at Thrive. Over just a short period of
              time I can tell that we are going to be doing business with Thrive
              for a long time and will gladly recommend them to anyone… except
              our competition.
            </h6>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default ClientReview;
