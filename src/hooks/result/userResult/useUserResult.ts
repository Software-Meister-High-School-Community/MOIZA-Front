import React from 'react'
import Slider from "react-slick";

const useUserResult = () => {
    const slider = React.useRef<Slider>(null);
    const users = [
        { type: "s", name: "강석현", schoolName: "대구소프트웨어마이스터고" },
        { type: "s", name: "정우재", schoolName: "대구소프트웨어마이스터고" },
        { type: "s", name: "전영준", schoolName: "대구소프트웨어마이스터고" },
        { type: "s", name: "임동현", schoolName: "대구소프트웨어마이스터고" },
        { type: "s", name: "정우재", schoolName: "대구소프트웨어마이스터고" },
        { type: "s", name: "장정원", schoolName: "대구소프트웨어마이스터고" },
        { type: "s", name: "김상은", schoolName: "대구소프트웨어마이스터고" },
    ];

    const slidesToShow = users.length < 7 ? users.length : 6;

    const sliderSettings = {
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        initialSlide: 0,
    };

    const handleNext = () => {
        slider?.current?.slickNext();
    };

    const handlePrevious = () => {
        slider.current?.slickPrev();
    };

    return {
        slider,
        users,
        sliderSettings,
        handleNext,
        handlePrevious
    }
}

export default useUserResult