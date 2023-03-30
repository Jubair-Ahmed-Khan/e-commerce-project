
const Banner = () => {
    // const src = "https://i.ibb.co/7j5j1Lp/alexander-andrews-Wzs4-QEm-CUQ-unsplash.jpg";
    const src = "https://i.ibb.co/jLyszcR/luke-peterson-l-UMj2-Zv5-HUE-unsplash.jpg";
    //FDF7C3
    return (
        <>

            <div style={{ backgroundColor: "" }}>
                <div className="c-container-large lg:pt-8">
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-5">

                        {/* header text  */}
                        <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 my-5">
                            <div>
                                <h1 className=" text-4xl font-bold uppercase">
                                    We Provide Products <br />
                                    with best quality
                                </h1>
                                <p className="my-5">
                                    Stuck in choosing best products ? Can't figure out what to do ? Lack of knowledge? We are here to help you to figure out your choice and purchase best products and have good experience.
                                </p>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" href="https://www.youtube.com">Explore Us</button>
                            </div>
                        </div>

                        {/* header image  */}
                        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
                            <div className="lg:ms-5">
                                <img className="img-fluid" src={src} alt="welcome_image" style={{ height: "300px", width: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;