import styled from 'styled-components';

export const Wrapper = styled.section<{
    isFold : boolean;
}>`
  background-color: #ffffff;
  width: 173px;
  border-radius: ${(props)=> props.isFold ? "5px 5px 0 0" : "5px"};
  position: relative;
  border: 1px solid #E0E0E0;
  margin: 35px 0 0 auto;
  > div >label {
    display: flex;
  }
  
  .list {
    position: absolute;
    top: 34px;
    left: -1px;
    width: 100%;
    border: 1px solid #E0E0E0;
    border-radius: 0 0 5px 5px;
    border-top: 0;
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
  top: 30px;
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
  :last-child{
    border-radius: 0 0 4px 4px;
  }
  :hover{
    background-color: #FFE199;
  }
`