import { AnimatePresence, useViewportScroll } from "framer-motion";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  BigImageBox,
  BigImageOverlay,
  BigImageRow,
  BigImageWrap,
  rowVariants,
  BigImageButton,
  BigImageImg,
} from "./BigImage.style";
import leftArrow from "../../../assets/img/Common/leftArrow.svg";
import rightArrow from "../../../assets/img/Common/rightArrow.svg";

interface IBigImageProps {
  imgs: string[];
  handleDisplay: Dispatch<SetStateAction<boolean>>;
}

const BigImage: React.FC<IBigImageProps> = ({ imgs, handleDisplay }) => {
  const [index, setIndex] = useState<number>(0);
  const [value, setValue] = useState<"left" | "right">("right");

  const increaseIndex = () => {
    setValue("right");
    const maxIndex = imgs.length - 1;
    setIndex((prev) => (prev === maxIndex ? prev : prev + 1));
  };

  const decreaseIndex = () => {
    setValue("left");
    setIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  const { scrollY } = useViewportScroll();

  return (
    <React.Fragment>
      <BigImageOverlay onClick={() => handleDisplay(false)} />
      <BigImageBox style={{ top: scrollY.get() + 120 }}>
        <BigImageWrap>
          <AnimatePresence initial={false}>
            <BigImageRow
              variants={rowVariants}
              initial={value === "right" ? `hidden` : "exit"}
              animate="visible"
              exit={value === "right" ? `exit` : "hidden"}
              transition={{ type: "tween", duration: 0.5 }}
              key={index}
            >
              <BigImageImg src={imgs[index]} alt={imgs[index]} />
            </BigImageRow>
          </AnimatePresence>
        </BigImageWrap>
        <BigImageButton direction="left" onClick={decreaseIndex}>
          <img src={leftArrow} />
        </BigImageButton>
        <BigImageButton direction="right" onClick={increaseIndex}>
          <img src={rightArrow} />
        </BigImageButton>
      </BigImageBox>
    </React.Fragment>
  );
};

export default BigImage;
