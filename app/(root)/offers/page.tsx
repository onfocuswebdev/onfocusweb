import React from "react";
import OfferCard from "@/components/cards/OfferCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { OffersText } from "@/constant/index"

const Offers = () => {
  return (
    <>
      <div className="bg-white min-h-screen flex justify-center items-center">
        <div className="md:flex w-2/3 md:space-x-10 space-y-10 md:space-y-0">
        {OffersText.map((offer: any) => (
            <OfferCard
              title={offer.product_name}
              description={offer.description}
              price={offer.price}
              source_code_link={offer.payment_link}
              key={offer.product_name}
            />

        ))}
        </div>
      </div>
    </>
  );
};

export default Offers;
