import Link from 'next/link';
import React from 'react';

const OfferCard = ({ title, description, price, source_code_link }: any) => {
  return (
    <div className="bg-yellow-300 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-700 mb-4">{price}</p>
      <Link href={source_code_link} target="_blank">
        <div className="bg-black text-white px-4 py-2 text-center rounded-md">
            Purchase
        </div>
      </Link>
    </div>
  );
};

export default OfferCard;