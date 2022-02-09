import { AnimatePresence } from "framer-motion";
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

  const increaseIndex = () => {
    const maxIndex = imgs.length - 1;
    setIndex((prev) => (prev === maxIndex ? prev : prev + 1));
  };

  const decreaseIndex = () => {
    setIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <React.Fragment>
      <BigImageOverlay onClick={() => handleDisplay(false)} />
      <BigImageBox>
        <BigImageWrap>
          <AnimatePresence initial={false}>
            <BigImageRow
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
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
