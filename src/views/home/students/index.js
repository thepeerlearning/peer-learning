import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// import required modules
import { Box, Button } from "@mui/material"
import { CldImage } from "next-cloudinary"
import { Autoplay } from "swiper/modules"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

export const images = [
  {
    course: "python",
    imgPath: "python-girl_kkjkqp",
    width: 276,
    height: 290,
  },
  {
    course: "Web development",
    imgPath: "web_i5bjei",
    width: 276,
    height: 290,
  },
  {
    course: "Scratch",
    imgPath: "scrach-girl_slb6lk",
    width: 276,
    height: 290,
  },
  {
    course: "UX/UI Design",
    imgPath: "Rectangle_5108_tkfo8f",
    width: 276,
    height: 290,
  },
  {
    course: "Javascript",
    imgPath: "js-girl_awnwj8",
    width: 276,
    height: 290,
  },
]
export default function StudentImages() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <Swiper
        slidesPerView={1.75}
        spaceBetween={10}
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
          1280: {
            slidesPerView: 4.2,
            spaceBetween: 0,
          },
          1500: {
            slidesPerView: 5,
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
              marginBottom: 200,
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
            >
              <CldImage
                style={{
                  position: "relative",
                  borderRadius: "10px",
                }}
                width={img.width}
                height={img.height}
                src={img.imgPath}
                alt={img.course}
                crop="fill"
                gravity="auto"
                loading="lazy"
              />

              <Button
                sx={{
                  font: `normal normal 700 normal 11px/11px ${Fonts.primary}`,
                  textAlign: "center",
                  padding: "7px 13px 10px 13px",
                  borderRadius: "10px",
                  textTransform: "capitalize",
                  position: "absolute",
                  bottom: 70,
                  left: 30,
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
