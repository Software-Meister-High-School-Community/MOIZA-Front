import React from 'react';
import * as C from './CategoryStyle';
import itemImg1 from '../../assets/img/category/itemImg1.svg'
import itemImg2 from '../../assets/img/category/itemImg2.svg'
import itemImg3 from '../../assets/img/category/itemImg3.svg'
import CImg1 from '../../assets/img/category/img1.svg'
import CImg2 from '../../assets/img/category/img2.svg'


const Category:React.FC = () => {
    return (
        <>
        <C.TitleBox>
           <C.Title>게시물 카테고리</C.Title>
           <C.Line/>
        </C.TitleBox>
        
            <C.Img src={CImg1} top='480px' left='1522px'/>
            <C.Img src={CImg2} top='740px' left='295px'/>
        <C.Container>

            <C.Item>Front-End</C.Item>
            <C.Item>Back-End</C.Item>
            <C.Item>
                <C.ItemImg src={itemImg1}/>
            </C.Item>
            <C.Item>IOS</C.Item>
            <C.Item>Android</C.Item>
            <C.Item>Design</C.Item>
            <C.Item>Game</C.Item>
            <C.Item>
                <C.ItemImg src={itemImg2}/>
            </C.Item>
            <C.Item>Security</C.Item>
            <C.Item>Embedded</C.Item>
            <C.Item>AI</C.Item>
            <C.Item>
                <C.ItemImg src={itemImg3}/>
            </C.Item>
        </C.Container>
        </>
    )
}

export default Category
