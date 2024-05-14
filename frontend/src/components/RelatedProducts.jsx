import React from 'react'
import LATEST from '../assets/latest'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const RelatedProducts = () => {
  return (
    <div>
      <h4>Related Products</h4>
      {/* container */}
      <div>
        <Swiper>
          {
            LATEST.map((item, i) => (
              <SwiperSlide key={i}>
                <Link to={''}>
                  <img src={item.image} alt='' />
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