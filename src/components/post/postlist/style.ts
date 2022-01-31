import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostHeadDiv = styled.div`
  width: 1196px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PostNameDiv = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;
`;

export const PostName = styled.p`
  width: 220px;
  height: 38px;
  font-size: ${({ theme }) => theme.fontSize.head_small};
  font-style: normal;
  font-weight: 400;
  font-family: Roboto;
`;

export const PostVector = styled.img`
  width: 26px;
  height: 26px;
  margin-top: 2px;
`;

export const PostDiv = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const RadioBtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 35px;
`;

export const SelectDiv = styled.div`
  display: flex;
`;

export const PosFormtDiv = styled.div`
  margin-top: 55px;
`;