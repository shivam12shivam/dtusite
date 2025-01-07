import { Carousel } from "@material-tailwind/react";

export function Carouselfunc() {
  return (
    <div>
      <Carousel transition={{ duration: 1 }} autoplay={true} loop={true}
        className=" overflow-hidden h-[550px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
        <img
          src="\src\images\20.avif"
          alt="image 1"
          className="object-fill h-full w-full "
        />
        <img
          src="\src\images\21.jpg"
          alt="image 2"
          className="object-fill h-full w-full "
        />
        <img
          src="src\images\22.webp"
          alt="image 3"
          className="object-fill h-full w-full "
        />
      </Carousel>
    </div>
  );
}