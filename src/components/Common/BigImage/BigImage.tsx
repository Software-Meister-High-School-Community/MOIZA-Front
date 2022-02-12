import { AnimatePresence, useViewportScroll } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import {
  BigImageBox,
  BigImageOverlay,
  BigImageRow,
  BigImageWrap,
  rowVariants,
  BigImageButton,
  BigImageImg,
  BigImageMagnifyButton,
} from "./BigImage.style";
import leftArrow from "../../../assets/img/Common/leftArrowBlack.svg";
import rightArrow from "../../../assets/img/Common/rightArrowBlack.svg";
import useBigImage from "../../../hooks/Common/useBigImage";
import plusMG from "../../../assets/img/Common/plusMagnifyingGlass.svg";
import minusMG from "../../../assets/img/Common/minusMagnifyingGlass.svg";

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
    imageSize,
    imageZoomHandle,
  } = useBigImage(imgs.length);

  const { scrollY } = useViewportScroll();

  return (
    <React.Fragment>
      <BigImageOverlay onClick={() => handleDisplay(false)} />
      <BigImageBox
        isFull={imageSize.width >= 1920}
        currentY={scrollY.get()}
        style={{
          width: imageSize.width,
          height: imageSize.height,
        }}
      >
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
      </BigImageBox>
      <BigImageButton
        direction="left"
        onClick={decreaseIndex}
        currentY={scrollY.get()}
      >
        <img src={leftArrow} alt="next" />
      </BigImageButton>
      <BigImageButton
        direction="right"
        onClick={increaseIndex}
        currentY={scrollY.get()}
      >
        <img src={rightArrow} alt="prev" />
      </BigImageButton>
      <BigImageMagnifyButton
        style={{ top: scrollY.get() + 807 }}
        direction="left"
        onClick={() => imageZoomHandle("enlargement", imageSize)}
      >
        <img src={plusMG} alt="enlargement" />
      </BigImageMagnifyButton>
      <BigImageMagnifyButton
        style={{ top: scrollY.get() + 807 }}
        direction="right"
        onClick={() => imageZoomHandle("reduction", imageSize)}
      >
        <img src={minusMG} alt="reduction" />
      </BigImageMagnifyButton>
    </React.Fragment>
  );
};

export default BigImage;
