import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import SpecialOffer from "../components/home/SpecialOffer";
import ClientReview from "../components/Review/ClientReview";
import SalesProduct from "./SalesProduct";
import ContactUs from "./ContactUs";

const Home = () => {
  const productsData = useLoaderData();

  return (
    <div>
      <Banner />
      <Products productsData={productsData} />
      <SpecialOffer />
      <SalesProduct />
      <ClientReview />
      <ContactUs />
    </div>
  );
};

export default Home;
