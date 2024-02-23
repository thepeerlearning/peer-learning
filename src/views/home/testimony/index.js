import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

// import required modules
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material"
import { Autoplay, FreeMode, Pagination } from "swiper/modules"
import { QuoteIcon } from "../../../components/svg/menuIcons"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

const testimonies = [
  {
    text: "As a tech entrepreneur, I see the immense potential of coding skills for my kids's future. Peer Learning is making it possible for more African kids to join the tech revolution. I'm proud to support their mission to bridge the digital divide.",
    author: "Mrs. Ndubuisi",
    location: "Alabama, United States",
    imgPath: "/images/testimony1.png",
  },
  {
    text: `As a mother of two kids who are now tech-savvy thanks to Peer Learning, I can't overstate the positive impact it's had on their future. Learning coding skills early is crucial, and Peer Learning makes it fun and engaging. Not only did they learn essential coding concepts, but they also developed problem-solving and critical thinking skills. I highly recommend Peer Learning to any parent who wants their child prepared for the digital world.`,
    author: "Mr. Toyin Asokeji",
    location: "United States",
    imgPath: "/images/testimony2.jpeg",
  },
]
export default function Testimonies() {
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, sm: 3, lg: 12.5 },
        mt: { xs: 2, md: 8.375 },
        position: "relative",
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        freeMode={true}
        autoHeight
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "bullets",
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              '">' +
              "<i></i>" +
              "<b></b>" +
              "</span>"
            )
          },
        }}
        className="swiper"
        modules={[Autoplay, FreeMode, Pagination]}
      >
        <Box className="swiper-wrapper">
          {testimonies.map((testimony, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "100%", position: "relative" }}
            >
              <Card
                sx={{
                  width: "100%",
                  padding: "33px 25px",
                  background: Colors.light,
                  boxShadow: "0px 2px 3px 0px rgba(0, 0, 0, 0.10)",
                  border: "1px solid rgba(236, 237, 238, 0.50)",
                  position: "relative",
                }}
              >
                <Box>
                  <QuoteIcon />
                </Box>
                <CardContent
                  sx={{
                    width: "95%",
                    height: { xs: 210, sm: 300, xl: 180 },
                    padding: { xs: "33px 0px", sm: "33px 25px" },

                    overflow: "auto",
                    "&::-webkit-scrollbar": {
                      width: 1,
                      height: 1,
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: Colors.primary,
                      borderRadius: 30,
                      boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25)`,
                    },
                    "&::-webkit-scrollbar-track": {
                      backgroundColor: "#d1dadd",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      width: "90%",
                      color: "#091135",
                      font: `normal normal 400 normal 14px/28px ${Fonts.primary}`,
                      textAlign: "justify",
                    }}
                  >
                    {testimony.text}
                  </Typography>
                </CardContent>
                <CardHeader
                  sx={{ p: 0, py: 2 }}
                  avatar={
                    <Avatar
                      src={testimony.imgPath}
                      sx={{ bgcolor: "#FFE7CC", pl: 0 }}
                      aria-label="recipe"
                    >
                      {testimony.author.charAt(0)}
                    </Avatar>
                  }
                  title={
                    <Box
                      sx={{
                        font: `normal normal 400 normal 16px/145% ${Fonts.primary}`,
                        fontFeatureSettings: `cv04' on, 'cv03' on, 'cv01' on;`,
                        color: Colors.light,
                      }}
                    >
                      {testimony.author}
                    </Box>
                  }
                  subheader={
                    <Box
                      sx={{
                        font: `normal normal 400 normal 13px/145% ${Fonts.primary}`,
                        fontFeatureSettings: `'cv04' on, 'cv03' on, 'cv01' on`,
                      }}
                    >
                      {testimony.location}
                    </Box>
                  }
                />
              </Card>
            </SwiperSlide>
          ))}
        </Box>
      </Swiper>
    </Box>
  )
}
