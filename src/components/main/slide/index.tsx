import * as S from "./style";
import Daeduck from "../banner/Daeduck";
import Daegu from "../banner/Daegu";
import Gwangju from "../banner/Gwangju";
import Mirim from "../banner/Mirim";
import Busan from "../banner/Busan";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        <div>
          <Daeduck />
        </div>
        <div>
          <Daegu />
        </div>
        <div>
          <Gwangju />
        </div>
        <div>
          <Mirim />
        </div>
        <div>
          <Busan />
        </div>
      </Slider>
    </S.Wrapper>
  );
};

export default Slide;
