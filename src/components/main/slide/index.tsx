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
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    cssEase: "linear",
    centerMode: true,
    variableWidth: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <Daeduck />
        <Daegu />
        <Gwangju />
        <Mirim />
        <Busan />
      </Slider>
    </div>
  );
};

export default Slide;
