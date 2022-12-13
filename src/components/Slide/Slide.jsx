import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slide.css';
import Movie from '../Movie/Movie';
function Slide({data}) {
    const settingSlider = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2500,
        rtl:true,
        cssEase: "linear",
        slidesToShow: 4.8,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 1,
                infinite: true
              }
            }
          ]
      };
  return (
        <Slider {...settingSlider} className='movie-container flex'>
            {
                data.length > 0 &&
                data.map((d, i) => (
                    <Movie key={i} poster={d.Poster} title={d.Title} />
                ))}
        </Slider>
  )
}

export default Slide