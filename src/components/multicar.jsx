import { Carousel } from "@material-tailwind/react";

export function MultiCar() {
    return (
        <div className="gap-1 md:gap-2 mt-2 flex sm:grid-cols-1 md:grid-cols-2 lg:flex border-t border-blue-gray-200 ">
            {/* Carousel 1 */}
            <div className="w-full ">
                <div className="font-black shadow-2xl text-sm md:text-2xl">RESEARCH HIGHLIGHTS</div>
                <Carousel
                    transition={{ duration: 3 }}
                    autoplay={true}
                    loop={true}
                    className=" overflow-hidden h-[220px] md:h-[340px]"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
            
                    <div className="">
                        <img
                            src="\images\rh1.png"
                            alt="image 2"
                            className="object-fill h-24 md:h-full md:w-full"
                        />
                        <div className=" absolute md:bottom-0 left-0 h-full md:h-min w-full text-center text-white font-semibold bg-black bg-opacity-50 p-2 sm:p-4 md:p-4 text-xxs sm:text-base">
                        Greenhouse Gas Mitigation Potential Through Clean Energy for Cement Production in India
                        </div>

                    </div>
                    <div className="">
                        <img
                            src="/images/rh1.png"
                            alt="image 3"
                            className="object-fill h-24 md:h-full md:w-full"
                        />
                        <div className="absolute bottom-0 text-white font-semibold bg-black bg-opacity-50 p-2 sm:p-4 md:p-4 text-xxxxs sm:text-base">
                        A study evaluates the potential of concentrated solar energy in cement production and its role in reducing greenhouse gas emissions. It estimates that solar energy can meet the thermal needs of cement production in India, cutting CO2 emissions by 2.5–7.6 million tons annually.                        </div>
                    </div>

                </Carousel>
            </div>


            {/* Carousel 2 */}
            <div className="w-28 md:w-full">
                <div className="font-extrabold shadow-2xl shadow-black text-sm md:text-2xl"><h1>ALUMNI <br className="block sm:hidden" /> CORNER</h1></div>

                <Carousel
                    transition={{ duration: 3.5 }}
                    autoplay={true}
                    loop={true}
                    className=" overflow-hidden h-[220px] md:h-[340px]"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
            
                    <div className="">
                        <img
                            src="\images\s2.png"
                            alt="image 2"
                            className="object-fill h-24 md:h-full w-full "
                        />
                        <div className=" overflow-hidden left-0 w-full text-center text-white font-semibold bg-black bg-opacity-50 p-2 sm:p-4 md:p-4 text-xxs sm:text-base">
                            Dr Lal PathLabs, one of India's leading diagnostic chains, has recently appointed Mr. Shankha Banerjee (DTU Alumnus, B.E. 1994, Production & Industrial Engg) as its new CEO.
                        </div>

                    </div>
                    <div className="relative">
                        <img
                            src="/images/s3.jpeg"
                            alt="image 3"
                            className="object-fill h-24 md:h-[340px] w-full"
                        />
                        <div className="absolute md:bottom-0 left-0 w-full text-center text-white font-semibold bg-black bg-opacity-50 p-2 sm:p-4 md:p-4 text-xxs sm:text-base">
                            Vijay Shekhar Sharma graduated from Delhi College of Engineering (or DTU) in the batch of 1999 and is the founder of PAYTM with a valuation exceeding $16 billion.
                        </div>
                    </div>
                    <div className="">
                        <img
                            src="\images\s4.jpeg"
                            alt="image 2"
                            className="object-fill h-24 md:h-[240px] w-full "
                        />
                        <div className=" overflow-hidden left-0 w-full text-center text-white font-semibold bg-black bg-opacity-50 p-2 sm:p-4 md:p-4 text-xxxs sm:text-base">
                        Durjoy Datta is an Indian author and screenwriter known for his coffee-table novels about the romantic life of young Indians. He is one among the bestselling writers in contemporary India                        </div>

                    </div>

                </Carousel>
            </div>

            {/* Carousel 3 */}
            <div className="w-full">
                <div className="font-extrabold shadow-2xl text-sm md:text-2xl">INCUBATION @DTU</div>

                <Carousel
                    transition={{ duration: 4 }}
                    autoplay={true}
                    loop={true}
                    className=" overflow-hidden h-[220px] md:h-[340px]"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    <img
                        src="\images\s1.jpeg"
                        alt="image 1"
                        className="object-fill h-full w-full "
                    />
                    <img
                        src="images/i1.jpg"
                        alt="image 1"
                        className="object-fill h-full w-full "
                    />
                    <img
                        src="images/i2.jpg"
                        alt="image 2"
                        className="object-fill h-full w-full "
                    />
                    <img
                        src="images/i3.jpg"
                        alt="image 3"
                        className="object-fill h-full w-full "
                    />
                    <img
                        src="images/i4.jpg"
                        alt="image 3"
                        className="object-fill h-full w-full "
                    />
                    <img
                        src="images/i5.jpg"
                        alt="image 3"
                        className="object-fill h-full w-full "
                    />
                </Carousel>
            </div>
        </div>
    );
}
