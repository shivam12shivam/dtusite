import { Carousel } from "@material-tailwind/react";

export function Carouselfunc() {
  return (
    <div>
      <Carousel transition={{ duration: 2 }} autoplay={false} loop={true}
        className=" overflow-hidden h-[550px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-1 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="">
          <img
            src="/images/20.avif" // Ensure forward slashes and correct path
            alt="image 1"
            className="object-fill h-72 md:h-full md:w-full"
          />
          
        </div>

        <div className="">
          <img
            src="/images/16.jpg" // Ensure forward slashes and correct path
            alt="image 1"
            className="object-cover w-full h-full relative md:-translate-y-32"
          />
          <div className="md:absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center py-2 z-10">
            <p className="text-lg font-bold">RESEARCH AND INNOVATION EXCELLENCE AWARD-2024</p>
          </div>
        </div>

        <div className="">
          <img
            src="/images/17.jpg" // Ensure forward slashes and correct path
            alt="image 1"
            className="object-fill h-full w-full md:-translate-y-32"
          />
          <div className="md:absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center py-2 z-10">
            <p className="text-lg font-bold">11th CONVOCATION GOLDEN PRIDE FUNCTION </p>
          </div>
        </div>

        <div className="">
          <img
            src="/images/18.jpg" // Ensure forward slashes and correct path
            alt="image 1"
            className="object-fill h-full w-full md:-translate-y-40"
          />
          <div className="md:absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center py-2 z-10">
            <p className="text-lg font-bold">11th CONVOCATION PRESIDED OVER SHRI VINAI KUMAR SAXENA</p>
          </div>
        </div>

        <div className="">
          <img
            src="/images/19.jpg" // Ensure forward slashes and correct path
            alt="image 1"
            className="object-fill h-60 md:h-full w-full md:-translate-y-24"
          />
          
          <div className="md:absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center py-2 z-10">
            <p className="text-lg font-bold">DISTINGUISHED SPEAKER SERIES, DTU</p>
          </div>
        </div>
        <div className="">
          <img
            src="/images/20.jpg" // Ensure forward slashes and correct path
            alt="image 1"
            className="object-fill h-full w-full md:-translate-y-72"
          />
          <div className="md:absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center py-2 z-10">
            <p className="text-lg font-bold">SIGNING OF MoU by ICSI</p>
          </div>
        </div>

      </Carousel>
    </div>
  );
}