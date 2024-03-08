"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

import {Pagination } from 'swiper/modules'
import Car from './Car';

export const CarCarousel = ({cars}) => {
    
    return (
      <div className="h-64 w-[20%] mx-auto mb-5 ">
        <Swiper>
          {cars.map((car) => {
            return (
              <SwiperSlide key={car._id}>
                <Car car={car} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
}
export const dynamic = 'force-dynamic'

