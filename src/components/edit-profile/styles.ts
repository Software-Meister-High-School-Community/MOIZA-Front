import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
  >.colorBox {
    width: 100%;
    height: 348px;
    background-color: #728F60;
  }
`
export const ProfileSection = styled.section`
  display: flex;
`
export const EditSection = styled.section`
  padding: 30px 0 0 42px;
  width: 717px;
  margin-bottom: 226px;
  > .backgroundColor {
    margin-top: 67px;
  }
  > .introduce {
    margin-top: 44px;
  }
  > .link {
    margin-top: 50px;
  }
  > .saveButtonSection {
    margin-top: 76px;
    display: flex;
    justify-content: flex-end;
  }
  > .editTitle {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
`
export const PersonInfo = styled.strong`
  display: flex;
  align-items: center;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  > .name {
    font-size: 32px;
    line-height: 37px;
  }
  .school {
    font-size: 18px;
    line-height: 21px;
    margin-left: 16px;
  }
`

