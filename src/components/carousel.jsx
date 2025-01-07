import { Carousel } from "@material-tailwind/react";

export function Carouselfunc() {
  return (
    <div>
      <Carousel transition={{ duration: 1 }} autoplay={true} loop={true}
        className="rounded-xl overflow-hidden h-[550px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://www.wewishes.com/wp-content/uploads/2020/07/Gym-Quotes-1.jpg"
          alt="image 1"
          className="object-fill h-full w-full rounded-md"
        />
        <img
          src="https://staticg.sportskeeda.com/editor/2022/10/31dcd-16652377189175-1920.jpg"
          alt="image 2"
          className="object-fill h-full w-full rounded-md"
        />
        <img
          src="https://www.wewishes.com/wp-content/uploads/2020/07/Gym-Quotes-9.jpg"
          alt="image 3"
          className="object-fill h-full w-full rounded-md"
        />
      </Carousel>
    </div>
  );
}