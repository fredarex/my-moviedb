import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slide.css';
function Slide({data}) {
    const settingSlider = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2500,
        rtl:true,
        cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0
      };
  return (
        <Slider {...settingSlider} className='people-row flex mb-[51px]' id='people-row-1'>
            {data.map((d, i) => (
                <div>
                    <img src={d.img} alt={d.alt} />
                </div>
            ))}
        </Slider>
  )
}

export default Slide