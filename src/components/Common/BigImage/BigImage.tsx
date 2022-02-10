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
import useBigImage from "../../../hooks/Common/useBigImage";

interface IBigImageProps {
  imgs: string[];
  handleDisplay: Dispatch<SetStateAction<boolean>>;
}

const BigImage: React.FC<IBigImageProps> = ({ imgs, handleDisplay }) => {
  const {
    index,
    direction,
    swipeRefSpeed,
    swipePower,
    increaseIndex,
    decreaseIndex,
  } = useBigImage(imgs.length);

  const { scrollY } = useViewportScroll();

  return (
    <React.Fragment>
      <BigImageOverlay onClick={() => handleDisplay(false)} />
      <BigImageBox style={{ top: scrollY.get() + 120 }}>
        <BigImageWrap>
          <AnimatePresence initial={false} custom={direction}>
            <BigImageRow
              variants={rowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.5 }}
              key={index}
              custom={direction}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeRefSpeed) {
                  increaseIndex();
                } else if (swipe > swipeRefSpeed) {
                  decreaseIndex();
                }
              }}
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
