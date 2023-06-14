import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import HomeDesign from './NavBar/Home.css';
import Image1 from './slider1.jpg';
import Image2 from './slider2.jpg';
import Image3 from './slider3.jpg';


const HomePageSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    };
  
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={Image1} alt="Image 1" className='slider-image'/>
          </div>
          <div>
            <img src={Image2} alt="Image 2" className='slider-image' />
          </div>
          <div>
            <img src={Image3} alt="Image 3" className='slider-image'/>
          </div>
        </Slider>
      </div>
    );
  };
  export default HomePageSlider;