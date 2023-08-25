"use client";

import React, { useState } from "react";
import OfferCard from "@/components/cards/OfferCard";
import { OffersText } from "@/constant/index";

const Offers = () => {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <>
      <div className="flex justify-center my-5">
        <div className="flex items-center text-center mx-1">
          <h6 className="font-extrabold">Monthly</h6>
        </div>
        <div className="relative inline-block w-16 h-9 rounded-full bg-stone-300">
          <input
            type="checkbox"
            className="absolute w-16 h-9 rounded-full opacity-0 cursor-pointer z-99"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <span className={`absolute w-8 h-8 left-1 right-1 top-0.5 bg-white rounded-3xl transform ${isYearly ? 'translate-x-6' : 'translate-x-0'} transition-transform`} />
        </div>
        <div className="flex items-center text-center mx-1">
          <h6 className="font-extrabold">Yearly</h6>
        </div>
      </div>
      <div className="bg-white min-h-screen flex justify-center md:items-start items-center">

        <div className="md:flex w-2/3 md:space-x-10 space-y-10 md:space-y-0">
          {OffersText.map((offer: any) => {
            const offerPrice = isYearly
              ? offer.price_yearly
              : offer.price_monthly;
            const offerLink = isYearly
              ? offer.payment_link_yearly
              : offer.payment_link_monthly;
            return (
              <OfferCard
                title={offer.product_name}
                description={offer.description}
                price={offerPrice}
                source_code_link={offerLink}
                key={offer.product_name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Offers;
