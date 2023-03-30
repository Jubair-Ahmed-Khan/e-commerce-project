import Link from 'next/link';
import React from 'react';

const ProductCard = (props) => {
    const { _id, name, price, description, mediaUrl } = props?.product;

    return (

        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full h-52" src={mediaUrl} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {description.slice(0, 40)} ...

                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-5 mb-2">&#2547; {price}</span>
                <br />
                <div className='mt-5'>
                    <Link href="" as="" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-lg font-semibold w-full text-center text-gray-700 hover:bg-yellow-200 mx-auto mb-2">View details</Link>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;