import { AnimatePresence, useViewportScroll } from "framer-motion";
import React, { Dispatch, SetStateAction } from "react";
import * as BI from "./BigImage.style";
import useBigImage from "../../../hooks/Common/useBigImage";
import plusMG from "../../../assets/img/common/BigImage/plusMagnifyingGlass.svg";
import minusMG from "../../../assets/img/common/BigImage/minusMagnifyingGlass.svg";
import LeftArrow from "../../../assets/img/common/prevBtnIcon.svg";
import RightArrow from "../../../assets/img/common/nextBtnIcon.svg";

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
      <BI.BigImageOverlay onClick={() => handleDisplay(false)} />
      <BI.BigImageBox
        isFull={imageSize.width >= 1920}
        currentY={scrollY.get()}
        style={{
          width: imageSize.width,
          height: imageSize.height,
        }}
      >
        <BI.BigImageWrap>
          <AnimatePresence initial={false} custom={direction}>
            <BI.BigImageRow
              variants={BI.rowVariants}
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
              <BI.BigImageImg src={imgs[index]} alt={imgs[index]} />
            </BI.BigImageRow>
          </AnimatePresence>
        </BI.BigImageWrap>
      </BI.BigImageBox>
      <BI.BigImageButton
        direction="left"
        onClick={decreaseIndex}
        currentY={scrollY.get()}
      >
        <img src={LeftArrow} alt="next" />
      </BI.BigImageButton>
      <BI.BigImageButton
        direction="right"
        onClick={increaseIndex}
        currentY={scrollY.get()}
      >
        <img src={RightArrow} alt="prev" />
      </BI.BigImageButton>
      <BI.BigImageMagnifyButton
        style={{ top: scrollY.get() + 807 }}
        direction="left"
        onClick={() => imageZoomHandle("enlargement", imageSize)}
      >
        <img src={plusMG} alt="enlargement" />
      </BI.BigImageMagnifyButton>
      <BI.BigImageMagnifyButton
        style={{ top: scrollY.get() + 807 }}
        direction="right"
        onClick={() => imageZoomHandle("reduction", imageSize)}
      >
        <img src={minusMG} alt="reduction" />
      </BI.BigImageMagnifyButton>
    </React.Fragment>
  );
};

export default BigImage;
