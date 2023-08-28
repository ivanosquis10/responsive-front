import React from 'react';

import { IProduct } from '@Types/countdownType';

const Product = ({
  title,
  description,
  imgSrc,
  price,
}: IProduct): JSX.Element => {
  // A fallback image source in case the provided image is not found.
  const notFound = '../ImgNotFound.svg';
  return (
    <section className="max-w-sm rounded overflow-hidden shadow-lg bg-green-100">
      <figure>
        <img
          className="mx-auto w-9/12 md:h-[300px] rounded-lg"
          src={imgSrc || notFound}
          alt={title}
        />
        <div className="px-6 py-4">
          <figcaption className="font-bold text-xl mb-2">{title}</figcaption>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </figure>

      <div className="px-6 pt-4 pb-2">
        <h1 className="text-gray-700 text-4xl font-black">{price}</h1>
        <button className="w-full mt-6 mb-3 py-2 text-white font-semibold bg-gray-700 hover:shadow-xl duration-200 hover:bg-gray-800">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Product;
