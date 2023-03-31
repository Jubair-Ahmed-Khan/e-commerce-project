import { useRouter } from "next/router";
import baseUrl from "@/helpers/baseUrl";
import { useState } from "react";

const Product = ({ product }) => {
    const { name, price, description, mediaUrl } = product ?? {};
    const [quantity, setQuantity] = useState(1);
    const router = useRouter();

    const user = {
        phone: "01523467562",
        role: "user"
    }

    if (router.isFallback) {
        return (
            <h3>loading ...</h3>
        )
    }

    return (
        <div className="bg-blue-100 text-center">
            <div className=" c-container-large min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
                <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                    <div className="md:flex items-center -mx-10">
                        <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                            <div className="relative border-4 p-5 border-green-200">
                                <img src={mediaUrl} className="w-full relative z-10 h-64 " alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-10">
                            <div className="mb-7">
                                <h1 className="font-bold uppercase text-2xl mb-3">{name}</h1>
                                <p className="text-sm">{description} </p>
                            </div>
                            <div>
                                <div className="inline-block align-bottom mr-5 mb-5 text-gray-500">
                                    <span className="text-3xl leading-none align-baseline">&#2547;</span>
                                    <span className="font-bold text-3xl leading-none align-baseline">{price}</span>

                                </div>

                                <div className="mb-8">
                                    <input type="number" name="quantity" placeholder="Quantity" min="1" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
                                </div>

                                <div className="inline-block align-bottom">
                                    {user ?
                                        <>
                                            <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold mb-4"><i className="mdi mdi-cart -ml-2 mr-2"></i> Add to cart</button>

                                        </>
                                        :
                                        <>
                                            <button className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold mb-4" onClick={() => router.push('/login')}><i className="mdi mdi-cart -ml-2 mr-2"></i>Login to add</button>
                                        </>
                                    }
                                    {(user.role == 'admin' || user.role == 'root') && <button className="bg-red-300 opacity-75 hover:opacity-100 text-red-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold mb-4 ml-4"><i className="mdi mdi-cart -ml-2 mr-2"></i> DELETE</button>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps({ params: { id } }) {
    const res = await fetch(`${baseUrl}/api/product/${id}`);
    const data = await res.json();
    return {
        props: { product: data }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '63ebb3c102c66bb9e88a0455' } }
        ],
        fallback: true,
    }
}

export default Product;