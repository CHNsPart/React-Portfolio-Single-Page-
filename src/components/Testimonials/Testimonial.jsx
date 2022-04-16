import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "./Testimonial.css"
import { Pagination } from 'swiper'
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import "swiper/css/pagination"
import "swiper/css"

const Testimonial = () => {

    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae dolore, non perspiciatis sed iste in fugit delectus tenetur voluptatum maiores. Delectus vero velit accusamus, labore natus minus neque voluptas?",
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae dolore, non perspiciatis sed iste in fugit delectus tenetur voluptatum maiores. Delectus vero velit accusamus, labore natus minus neque voluptas?",
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae dolore, non perspiciatis sed iste in fugit delectus tenetur voluptatum maiores. Delectus vero velit accusamus, labore natus minus neque voluptas?",
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae dolore, non perspiciatis sed iste in fugit delectus tenetur voluptatum maiores. Delectus vero velit accusamus, labore natus minus neque voluptas?",
        }
    ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Excetional Work! </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>
        {/* Slider */}
        <Swiper className='swiper_css'
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable:true}}
        >
            {clients.map((clients, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={clients.img} alt="client image" />
                            <span>{clients.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial