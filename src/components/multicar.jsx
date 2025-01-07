import { Carousel } from "@material-tailwind/react";

export function MultiCar() {
    return (
        <div className="gap-2 mt-2 grid sm:grid-cols-1 md:grid-cols-2 lg:flex border-t border-blue-gray-200">
            {/* Carousel 1 */}
            <div className="w-full sm:w-1/3">
                <div className="font-black shadow-2xl text-2xl">RESEARCH HIGHLIGHTS</div>
                <Carousel
                    transition={{ duration: 3 }}
                    autoplay={true}
                    loop={true}
                    className=" overflow-hidden h-[340px]"
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
                        src="https://www.wewishes.com/wp-content/uploads/2020/07/Gym-Quotes-1.jpg"
                        alt="image 1"
                        className="object-fill h-full w-full "
                    />
                    <img
                        src="https://staticg.sportskeeda.com/editor/2022/10/31dcd-16652377189175-1920.jpg"
                        alt="image 2"
                        className="object-fill h-full w-full "
                    />
                    <img
                        src="https://www.wewishes.com/wp-content/uploads/2020/07/Gym-Quotes-9.jpg"
                        alt="image 3"
                        className="object-fill h-full w-full "
                    />
                </Carousel>
            </div>

            {/* Carousel 2 */}
            <div className="w-full sm:w-1/3">
                <div className="font-extrabold shadow-2xl shadow-black text-2xl"><h1>ALUMNI CORNER</h1></div>

                <Carousel
                    transition={{ duration: 3.5 }}
                    autoplay={true}
                    loop={true}
                    className=" overflow-hidden h-[340px]"
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
                    <div className="">
                        <img
                            src="\images\s2.png"
                            alt="image 2"
                            className=" "
                        />
                        <div className=" overflow-hidden left-0 w-full text-center text-white font-semibold bg-black bg-opacity-50 p-2 sm:p-4 md:p-4 text-sm sm:text-base">
                            Dr Lal PathLabs, one of India's leading diagnostic chains, has recently appointed Mr. Shankha Banerjee (DTU Alumnus, B.E. 1994, Production & Industrial Engg) as its new CEO.
                        </div>

                    </div>
                    <div className="relative">
                        <img
                            src="/images/s3.jpeg"
                            alt="image 3"
                            className="object-fill h-full w-full"
                        />
                        <div className="absolute bottom-0 left-0 w-full text-center text-white font-semibold bg-black bg-opacity-50 p-2">
                            Vijay Shekhar Sharma graduated from Delhi College of Engineering (or DTU) in the batch of 1999 and is the founder of PAYTM with a valuation exceeding $16 billion.
                        </div>
                    </div>

                </Carousel>
            </div>

            {/* Carousel 3 */}
            <div className="w-full sm:w-1/3">
                <div className="font-extrabold shadow-2xl text-2xl">INCUBATION@DTU</div>

                <Carousel
                    transition={{ duration: 4 }}
                    autoplay={true}
                    loop={true}
                    className=" overflow-hidden h-[340px]"
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
                        src="https://www.wewishes.com/wp-content/uploads/2020/07/Gym-Quotes-1.jpg"
                        alt="image 1"
                        className="object-fill h-full w-full "
                    />
                    <img
                        src="https://staticg.sportskeeda.com/editor/2022/10/31dcd-16652377189175-1920.jpg"
                        alt="image 2"
                        className="object-fill h-full w-full "
                    />
                    <img
                        src="https://www.wewishes.com/wp-content/uploads/2020/07/Gym-Quotes-9.jpg"
                        alt="image 3"
                        className="object-fill h-full w-full "
                    />
                </Carousel>
            </div>
        </div>
    );
}
