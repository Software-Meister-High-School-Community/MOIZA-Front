import { useCallback, useEffect, useState } from "react";

const useBigImage = (imgLength: number) => {
  const [index, setIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const width: number = 995;
  const height: number = 571;

  const [imageSize, setImageSize] = useState({
    width,
    height,
  });

  const swipeRefSpeed = 10000;

  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const imageZoomHandle = useCallback((type: string) => {
    switch (type) {
      case "enlargement":
        setImageSize((prev) => ({
          width: (prev.width += prev.width * (3 / 10)),
          height: (prev.height += prev.height * (3 / 10)),
        }));
        break;

      case "reduction":
        setImageSize((prev) => ({
          width: (prev.width -= prev.width * (3 / 10)),
          height: (prev.height -= prev.height * (3 / 10)),
        }));
        break;
      default:
        break;
    }
  }, []);

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
    imageSize,
    imageZoomHandle,
  };
};

export default useBigImage;
