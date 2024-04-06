import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// import required modules
import { Box, Button } from "@mui/material"
import Image from "next/image"
import { Autoplay } from "swiper/modules"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

export const images = [
  {
    course: "python",
    imgPath: "/images/python-girl.jpeg",
  },
  {
    course: "Web development",
    imgPath: "/images/web-boy.jpeg",
  },
  {
    course: "Scratch",
    imgPath: "/images/scratch-girl.jpeg",
  },
  {
    course: "UX/UI Design",
    imgPath: "/images/uiux-boy.jpeg",
  },
  {
    course: "Javascript",
    imgPath: "/images/js-boy.jpeg",
  },
]
export default function StudentImages() {
  return (
    <Box
      sx={{
        width: "100%",
        pl: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
        position: "relative",
      }}
    >
      <Swiper
        slidesPerView={1.18}
        spaceBetween={35}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 0,
          },
          1500: {
            slidesPerView: 3.8,
            spaceBetween: 0,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="swiper"
        modules={[Autoplay]}
      >
        {images.map((img, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: 350,
                height: 340,
                borderRadius: "32px",
                position: "relative",
              }}
            >
              <Image
                style={{ borderRadius: "32px", position: "relative" }}
                src={img.imgPath}
                alt={img.course}
                width={350}
                height={340}
              />
              <Button
                sx={{
                  filter: `blur(1)`,
                  font: `normal normal 700 normal 11px/11px ${Fonts.primary}`,
                  textAlign: "center",
                  padding: "7px 13px 10px 13px",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  position: "absolute",
                  bottom: 18,
                  left: 15,
                  color: Colors.light,
                  border: `1px solid ${Colors.light}`,
                }}
              >
                {img.course}
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
