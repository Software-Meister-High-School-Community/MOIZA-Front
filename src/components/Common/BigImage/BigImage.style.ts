import { motion, Variants } from "framer-motion";
import styled, { css } from "styled-components";

export const BigImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: black;
  opacity: 70%;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

export const BigImageBox = styled(motion.div)<{
  isFull: boolean;
  currentY: number;
}>`
  max-width: 100%;
  max-height: 979px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  left: 50%;
  ${(props) => `top: calc(${props.currentY}px + 50%)`};
  transform: translate(-50%, -50%);
  ${(props) => props.isFull && `top : ${props.currentY}`}
`;

export const BigImageWrap = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const BigImageRow = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0px;
  left: 0px;
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
  background-color: white;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const BigImageButton = styled.button<{
  direction: "left" | "right";
  currentY: number;
}>`
  position: absolute;
  width: 44px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
  border-radius: 100px;
  cursor: pointer;
  ${(props) => `top: calc(${props.currentY}px + 50%)`};
  transform: translate(-0%, -50%);
  z-index: 3;

  img {
    width: 12px;
    object-fit: scale-down;
  }

  ${(props) => props.direction === "left" && "left : 31px"}
  ${(props) => props.direction === "right" && "right 31px"}
`;

export const BigImageMagnifyButton = styled.button<{
  direction: "left" | "right";
}>`
  position: absolute;
  width: 56px;
  height: 50px;
  background-color: ${(props) => props.theme.color.gray_color1};
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;

  ${(props) =>
    props.direction === "left" &&
    css`
      left: 50%;
      transform: translate(-120%, 0%);
    `}

  ${(props) =>
    props.direction === "right" &&
    css`
      right: 50%;
      transform: translate(120%, 0%);
    `}

  img {
    width: 24px;
    object-fit: scale-down;
  }
`;
