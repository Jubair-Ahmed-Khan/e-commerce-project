import Link from 'next/link'

const Footer = () => {
    return (
        <div className="bg-blue-900 ">
            <footer className="c-container-large relative w-full pt-16 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-yellow-500 ">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-white ">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-twitter"></i></button><button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-facebook-square"></i></button><button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-dribbble"></i></button><button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-yellow-500 text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-white  hover:text-green-500 font-semibold block pb-2 text-sm" href="/">About Us</Link>
                                        </li>
                                        <li>
                                            <Link className="text-white  hover:text-green-500 font-semibold block pb-2 text-sm" href="/">Blog</Link>
                                        </li>
                                        <li>
                                            <Link className="text-white  hover:text-green-500 font-semibold block pb-2 text-sm" href="/">Github</Link>
                                        </li>
                                        <li>
                                            <Link className="text-white  hover:text-green-500 font-semibold block pb-2 text-sm" href="/">Free Products</Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-yellow-500  text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link className="text-white  hover:text-green-500 font-semibold block pb-2 text-sm" href="/">MIT License</Link>
                                        </li>
                                        <li>
                                            <Link className="text-white  hover:text-green-500 font-semibold block pb-2 text-sm" href="/">Terms &amp; Conditions</Link>
                                        </li>
                                        <li>
                                            <Link className="text-white  hover:text-green-500 font-semibold block pb-2 text-sm" href="/">Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link className="text-white  hover:text-green-500 font-semibold block pb-2 text-sm" href="/">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-yellow-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2023</span>REPLIQ
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;