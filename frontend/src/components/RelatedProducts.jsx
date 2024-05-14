import React from 'react'
import LATEST from '../assets/latest'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { RiShoppingCart2Line } from 'react-icons/ri'

const RelatedProducts = () => {
  return (
    <div>
      <h4 className='border-l-4 pl-2 border-secondary bold-20'>Related Products</h4>
      {/* container */}
      <div className='mx-auto max-w-full'>
        <Swiper
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className='h-[422px] sm:h-[477px] mt-5'
        >
          {
            LATEST.map((item, i) => (
              <SwiperSlide key={i}>
                <Link to={''}>
                  <img src={item.image} alt='' />
                  
                  <div>
                    <h4>
                      {item.name}
                    </h4>
                    <p>
                      Distinctio atque harum omnis at iure libero est. Corporis eum sint in. Qui est veniam odit ut.
                    </p>
                    <div>
                      <div>
                        <span>${item.new_price}.00</span>
                        <span>${item.old_price}.00</span>
                      </div>
                      <RiShoppingCart2Line />
                    </div>
                  </div>

                </Link>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default RelatedProducts