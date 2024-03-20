import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
// import required modules
import { Avatar, Box, Card, CardHeader, Typography } from "@mui/material"
import { Autoplay, Pagination } from "swiper/modules"
import { QuoteIcon } from "../../../components/svg/menuIcons"
import { Colors } from "../../../components/themes/colors"
import { Fonts } from "../../../components/themes/fonts"

export const testimonies = [
  {
    text: "As a tech entrepreneur, I've seen firsthand the value of coding skills. It's not just about programming, but also about developing problem-solving and critical thinking. Peer Learning's approach has been fantastic for my kids. They're learning valuable skills while building confidence. I highly recommend",
    author: "Mr. Hameed",
    location: "Alabama, United States",
    imgPath: "/images/mr-hameed.jpeg",
  },
  {
    text: `Being a mom of two, I always wanted them to be future-proof with tech skills. Peer Learning has been amazing! They're not just learning to code; they're tackling challenges and figuring things out on their own. It's incredible to see them building their own projects with confidence!`,
    author: "Mrs. Roy",
    location: "Florida, United States",
    imgPath: "/images/testimony2.jpeg",
  },
  {
    text: `What sets Peer Learning apart for me is that their flexible schedule and personalized learning are perfect for my kids' different learning styles. The post-class reports are like mini-report cards, keeping me informed on their progress. Plus, the patient and professional instructors make all the difference.`,
    author: "Mrs. Faith",
    location: "Melbourne, Australia",
    imgPath: "/images/mrs-faith.jpeg",
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
            spaceBetween: 0,
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
        modules={[Autoplay, Pagination]}
      >
        <Box className="swiper-wrapper">
          {testimonies.map((testimony, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
              }}
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
                <Box
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
                      color: "#010101",
                      font: `normal normal 400 normal 16px/23.2px ${Fonts.primary}`,
                      textAlign: "justify",
                    }}
                  >
                    {testimony.text}
                  </Typography>
                </Box>
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
