// src/sections/ReviewSection.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


const reviews = [
  {
    img: '/assets/img/testimonial/testimonial-4.png',
    name: 'Jhon Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic quasi sint, neque possimus adipisci quae vel a debitis accusamus!',
  },
  {
    img: '/assets/img/testimonial/testimonial-3.png',
    name: 'Jhon Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic quasi sint, neque possimus adipisci quae vel a debitis accusamus!',
  },
  {
    img: '/assets/img/testimonial/testimonial-1.jpg',
    name: 'Jhon Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo hic quasi sint, neque possimus adipisci quae vel a debitis accusamus!',
  },
  
];

export default function ReviewSection() {
  return (
    <section className="review">
      <h1 className="heading">Nuestros <span>Clientes</span></h1>
      <div className="swiper-wrapper">
      <Swiper
        className="review-slider"
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 7500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
        }}
        modules={[Autoplay]}
      >
        {reviews.map((review, index) => (
          <SwiperSlide className="box" key={index}>
            <img src={review.img} alt="" />
            <p>{review.text}</p>
            <h3>{review.name}</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </section>
  );
}
