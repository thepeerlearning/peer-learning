// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import * as React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Colors } from "../../components/themes/colors";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Fonts } from "../../components/themes/fonts";
import { NextIconButton, PreviousIconButton } from "../../components/svg";

export default function TeamSlides() {
  const NextButton = ({ children }) => {
    const swiper = useSwiper();
    return <span onClick={() => swiper.slideNext()}>{children}</span>;
  };
  const PreviousButton = ({ children }) => {
    const swiper = useSwiper();
    return <span onClick={() => swiper.slidePrev()}>{children}</span>;
  };
  const cards = [
    {
      img: "malikG.jpg",
      teacher: "Malik Gwandu",
      company: "SYNTHESIS",
      role: "Product Designer",
      experience: `Malik is a product designer with a passion for creating meaningful products that integrate technology and human experience. He has 6 years of experience in the tech industry, working on a variety of projects across Web3, gaming, healthcare, fintech, and education. Malik is a strong advocate for human-centered design, and he believes that the best products are those that are built with the user in mind.`,
    },
    {
      img: "esther.jpeg",
      teacher: "Martha Negedu",
      company: "IDEAL ROBOTICS",
      role: "Software Developer",
      experience: `
Martha is an exceptional software developer with a remarkable talent for crafting scalable and innovative software solutions across diverse industries. With over thee years of experience in the tech industry, Martha has consistently delivered exceptional results on a wide range of projects spanning healthcare, and ed-tech. Her expertise lies in leveraging cutting-edge web and mobile technologies. She is a valuable asset to any team due to her dedication, creativity, and passion for teaching.`,
    },
    {
      img: "malik.png",
      teacher: "Hauwa Maneer",
      company: "Sterms",
      experience: `
Martha is an exceptional software developer with a remarkable talent for crafting scalable and innovative software solutions across diverse industries. With over thee years of experience in the tech industry, Martha has consistently delivered exceptional results on a wide range of projects spanning healthcare, and ed-tech. Her expertise lies in leveraging cutting-edge web and mobile technologies. She is a valuable asset to any team due to her dedication, creativity, and passion for teaching.`,
    },
    {
      img: "marther.jpg",
      experience: `
Martha is an exceptional software developer with a remarkable talent for crafting scalable and innovative software solutions across diverse industries. With over thee years of experience in the tech industry, Martha has consistently delivered exceptional results on a wide range of projects spanning healthcare, and ed-tech. Her expertise lies in leveraging cutting-edge web and mobile technologies. She is a valuable asset to any team due to her dedication, creativity, and passion for teaching.`,
      teacher: "Musa Ali",
      company: "Stetis limited",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 3, sm: 0 },
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={10}>
          <Swiper
            roundLengths
            loop
            grabCursor
            keyboard
            lazy
            slidesPerView={1}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2.8,
              },
              960: {
                width: 960,
                slidesPerView: 2.8,
              },
              1200: {
                width: 1200,
                slidesPerView: 2.8,
              },
            }}
          >
            <Box>
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <Card
                    sx={{
                      maxWidth: 470,
                      boxShadow: "none",
                      borderRadius: "12px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 320 }}
                      image={`/images/${card.img}`}
                    />
                    <Box component="div" sx={{ mt: 2 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          font: `normal normal 500 20px/24px ${Fonts.secondary}`,
                          color: "#B71568",
                        }}
                      >
                        {card.teacher}
                        <Box
                          component="div"
                          sx={{
                            font: `normal normal 500 20px/24px ${Fonts.secondary}`,
                            color: "#0D1825",
                          }}
                        >
                          {card.role}
                        </Box>
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          font: `normal normal 400 13px/21px ${Fonts.secondary}`,
                          color: "#262D3D",
                        }}
                      >
                        {card.experience}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box
                        sx={{
                          font: `normal normal 400 12px/20px ${Fonts.secondaryNeu}`,
                          color: "#455065",
                        }}
                      >
                        Previously at
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          font: `normal normal 500 16px/42px ${Fonts.secondaryNeu}`,
                          color: Colors.black,
                          m: 0,
                        }}
                      >
                        {card.company}
                      </Box>
                    </Box>
                  </Card>
                </SwiperSlide>
              ))}
            </Box>
            <Box
              component="div"
              sx={{
                width: 100,
                margin: "80px auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <PreviousButton>
                <PreviousIconButton style={{ cursor: "pointer" }} />{" "}
              </PreviousButton>

              <NextButton>
                <NextIconButton style={{ cursor: "pointer" }} />
              </NextButton>
            </Box>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
