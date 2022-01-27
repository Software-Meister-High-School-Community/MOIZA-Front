import styled,{css} from "styled-components";

interface styleProps {
  disabled?: boolean,
  current?: boolean,
}

export const Container = styled.footer`
  display: flex;
  height: 50px;
  justify-content: center;
  gap: 30px;
  align-items: center;
  margin: 0 auto;
`;

export const MoveButton = styled.img<styleProps>`
  cursor: pointer;
  &[disable] {
    background-color:red;
     cursor: default;
    }
`;

export const Button = styled.button<styleProps>`
  cursor: pointer;
  color: ${props => props.theme.color.gray_color4};
  font-size: ${props => props.theme.fontSize.body_large};
  font-weight: 400;

  ${(props) =>
        props.current 
        ? css`
          color: ${(props)=> props.theme.color.main_blue_color};
          cursor: default;
        `
        : css``}
`