import { useState } from "react";

const useBigImage = (imgLength: number) => {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const swipeRefSpeed = 10000;

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const increaseIndex = () => {
    setDirection("right");
    const maxIndex = imgLength - 1;
    setIndex((prev) => (prev === maxIndex ? prev : prev + 1));
  };

  const decreaseIndex = () => {
    setDirection("left");
    setIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return {
    index,
    direction,
    swipeRefSpeed,
    swipePower,
    increaseIndex,
    decreaseIndex,
  };
};

export default useBigImage;
