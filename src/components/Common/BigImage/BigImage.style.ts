import { motion, Variants } from "framer-motion";
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

  img {
    /* width: 955px !important;
    height: 571px !important; */
    object-fit: cover !important;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export const rowVariants: Variants = {
  visible: {
    x: 0,
  },
  hidden: (direction: string) => {
    return {
      x: direction === "right" ? 955 : -955,
    };
  }, //x 가 작을 수록 왼쪽으로 붙고 클수록 오른쪽으로 붙음
  exit: (direction: string) => {
    return {
      x: direction === "right" ? -955 : 955,
    };
  },
};

export const BigImageImg = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: gray;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const BigImageButton = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  width: 128px;
  height: 128px;
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

  ${(props) => props.direction === "left" && "left : -128px"}
  ${(props) => props.direction === "right" && "right -128px"}
`;
