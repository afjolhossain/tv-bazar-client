/* eslint-disable react/no-unescaped-entities */
const OurTeam = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold py-12 ml-4">Our Executive Team</h1>
      <p className="ml-4">
        DealNews started in 1997 when two friends wanted to share the amazing
        deals they were finding with the rest of the world. Since then, the
        company has grown to more than 100 employees worldwide, with an
        executive team that's just as enthusiastic some might use the term
        "obsessed" about our mission of sharing the best deals with the world as
        our original founders were.
      </p>

      <div className="grid xl:grid-cols-3  md:grid-cols-2  sm:grid-cols-1 text-start px-6 mt-4">
        <div>
          <h1 className="text-2xl font-bold text-center">Daniel de Grandpre</h1>
          <p className="text-center">CEO AND CO-FOUNDER</p>
          <p>
            Dan de Grandpre has built DealNews into a discovery platform that
            dominates the product recommendation space, with over 250 million
            visits annually. A forward-thinking and decisive e-commerce leader,
            Dan is known for his ability to foresee and monetize shifts in
            consumer behavior. Dan earned his Bachelor’s degree in Psychology
            from Carnegie Mellon University and Master’s from the University of
            Oregon.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">Stacey Sullins</h1>
          <p className="text-center">PRESIDENT</p>
          <p>
            Stacey joined DealNews in 2016 to help solve organizational
            challenges in innovative ways. She is responsible for advising all
            levels of the organization on leadership development and succession,
            compensation and health plan strategies, organizational change, and
            culture transformation. After spending two decades working in
            various functions within the communications and human resources
            industry, Stacey knows that company culture and community drives
            everything an organization does. She is committed to nurturing the
            culture and strives to connect with employees on a personal level.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center">Daniel Beckham</h1>
          <p className="text-center">VP OF ENGINEERING</p>
          <p>
            Daniel Beckham VP OF ENGINEERING Daniel joined DealNews in 2000 as a
            software developer. During his tenure with the company Daniel
            quickly distinguished himself as a technical leader and has since
            been responsible for systems engineering, site architecture, and the
            development of proprietary content production systems. A native of
            Birmingham, Alabama, Daniel started his engineering career at MIS in
            Cleveland, Ohio as a developer. Prior to that, he worked for BOC
            Process Plants in project management software. A family connection
            brought Daniel back to Alabama and to DealNews.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
