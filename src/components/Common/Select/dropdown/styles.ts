import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #ffffff;
  width: 173px;
  border-radius: 5px;
  border: 1px solid #E0E0E0;
  margin: 35px 0 0 auto;
  overflow: hidden;
  > div >label {
    display: flex;
  }
`
export const Seleted = styled.div`
  width: 140px;
  height: 34px;
  padding: 9px 0 9px 12px;
  box-sizing: border-box;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`
interface ArrowProps {
    isFold : boolean
}
export const Arrow = styled.img<ArrowProps>`
    margin-left: auto;
  margin-right: 10px;
  transition: all ease 200ms;
  transform: rotate(${(props)=>props.isFold ? "180" : "0"}deg);
`
interface OptionProps {
    isSelected : boolean
}
export const Option = styled.div<OptionProps>`
  width: 100%;
  height: 30px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${(props)=> props.isSelected ? "#555555" : "#999999"};
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 8px 12px 6px 11px;
  :hover{
    background-color: #FFE199;
  }
`