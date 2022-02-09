import { motion } from "framer-motion";
import styled from "styled-components";

export const BigImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: ${(props) => props.theme.color.gray_color5};
  opacity: 40%;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

export const BigImageBox = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 995px;
  height: 571px;
  z-index: 2;
  top: 120px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const BigImageWrap = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BigImageRow = styled(motion.div)`
  width: 995px;
  height: 571px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
`;

export const rowVariants = {
  hidden: {
    x: 995,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -995,
  },
};

export const BigImageImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: gray;
`;

export const BigImageButton = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 0px;
  cursor: pointer;
  top: 50%;
  z-index: 3;

  img {
    width: 23px;
    object-fit: scale-down;
  }

  ${(props) => props.direction === "left" && "left : -100px"}
  ${(props) => props.direction === "right" && "right -100px"}
`;
