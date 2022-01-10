import styled from 'styled-components'

interface styleProps {
    top: string,
    left: string
}

export const Wrapper = styled.div`
    margin-top:7%;
`

export const Container = styled.div`
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
    width: 1270px;
`
export const Item = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-right:30px;
    margin-bottom:30px;
    width: 175px;
    height: 175px;
    border: 1px solid ${(porps) => porps.theme.color.gray_color3};
    font-size: ${(porps) => porps.theme.fontSize.body_large};
    font-weight: 400;
    border-radius:5px;
    cursor: pointer;
`

export const ItemImg = styled.img`
`
export const Img = styled.img`
    position:absolute;
    top: ${(props:styleProps ) => props.top};
    left: ${(props:styleProps) => props.left}; 
    z-index: 1;
`

export const TitleBox = styled.div`
    margin: 0 auto 80px auto;
    width: 1270px;
    display: flex;
    align-items:center;
    justify-content:space-between;
`

export const Title = styled.h1`
    font-weight:400;
    font-size:${(props) => props.theme.fontSize.head_large };
`
export const Line = styled.div`
    width: 944px;
    height: 1px;
    background-color: ${(porps) => porps.theme.color.main_yellow_color}
`