"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination } from 'swiper/modules'
import Car from './Car';

export const CarCarousel = ({cars}) => {
    
    return (
        <div className='w-[30%] mx-auto'>
             <Swiper>
          {cars.map((car) => {
              console.log(car)
              return <SwiperSlide key={car._id}>
                  
                  <Car car={ car} />
              </SwiperSlide>
              
          })}
      </Swiper>
      </div>
     
  )
}
export const dynamic = 'force-dynamic'

