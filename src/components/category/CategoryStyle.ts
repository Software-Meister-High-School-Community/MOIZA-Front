import styled from 'styled-components'

interface styleProps {
    top: string,
    left: string
}


export const Container = styled.div`
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
    margin-top:80px;
    width: 1270px;
    height: 524px;
`
export const Item = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    margin-right:30px;
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
    margin: 220px auto 100px auto;
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