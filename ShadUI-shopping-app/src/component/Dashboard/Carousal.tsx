import { FC, useEffect, useState } from "react";

interface CarousalType {
  slideImages: Array<string>;
}

const Carousal: FC<CarousalType> = ({ slideImages }): JSX.Element => {
  const [active, setActive] = useState(0);
  const [move, setmove] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active + 1 == slideImages.length) setActive(-1);
      setmove(() => {
        setActive((p) => p + 1);
        console.log(
          active,
          active * document.getElementById("image")!.offsetWidth
        );
        return -active * document.getElementById("image")!.offsetWidth;
      });
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div
      className="overflow-hidden w-full relative scroll-smooth h-full"
      id="wrapper"
    >
      <div
        className="h-full w-full flex transition-all absolute"
        style={{ left: move, transition: " all 0.8s linear" }}
      >
        {slideImages.map((ele, index) => {
          return (
            <img
              src={ele}
              key={index}
              alt=""
              loading="lazy"
              id="image"
              className="h-full min-w-full object-cover aspect-video"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousal;
