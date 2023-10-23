import { useEffect, useState } from "react";
const Carousal = () => {
  const [active, setActive] = useState(0);
  const [move, setmove] = useState(0);
  const slideImages = [
    "https://images.unsplash.com/photo-1697807650304-907257330a3e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697537045318-3510d37ca3c6?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1697909622972-3212d9dde7b5?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1697432123723-9bcdfaab7878?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

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
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div
      className="h-screen overflow-hidden relative scroll-smooth"
      id="wrapper"
    >
      <div
        className="h-full w-full flex transition-all absolute"
        style={{ left: move, transition: " all 0.7s linear" }}
      >
        {slideImages.map((ele) => {
          return (
            <img
              src={ele}
              alt=""
              loading="lazy"
              id="image"
              className="h-full min-w-full object-cover aspect-square"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousal;
