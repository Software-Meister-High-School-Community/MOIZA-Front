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

interface IBigImageProps {
  imgs: string[];
  handleDisplay: Dispatch<SetStateAction<boolean>>;
}

const BigImage: React.FC<IBigImageProps> = ({ imgs, handleDisplay }) => {
  const [index, setIndex] = useState<number>(0);
  const [leaving, setLeaving] = useState<boolean>(false);

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const increaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    const maxIndex = imgs.length - 1;
    setIndex((prev) => (prev === maxIndex ? prev : prev + 1));
  };

  const decreaseIndex = () => {
    if (leaving) return;
    toggleLeaving();
    setIndex((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <React.Fragment>
      <BigImageOverlay onClick={() => handleDisplay(false)} />
      <BigImageBox>
        <BigImageWrap>
          <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
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
          <BigImageButton direction="left" onClick={decreaseIndex}>
            -1
          </BigImageButton>
          <BigImageButton direction="right" onClick={increaseIndex}>
            +1
          </BigImageButton>
        </BigImageWrap>
      </BigImageBox>
    </React.Fragment>
  );
};

export default BigImage;
