import { Box, Button, CssBaseline, Typography } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"
import heroImage from "../public/images/svgs/hero-bg.svg"
import { Colors } from "../src/components/themes/colors"
import { Fonts } from "../src/components/themes/fonts"
import HomePageLayout from "../src/views/home/layout"
import StudentImages from "../src/views/home/students"
import HomeCoursesTab from "../src/views/home/tab"
// import Testimonies from "../src/views/home/testimony"

export default function HomePage() {
  const router = useRouter()
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Box
        id="hero-section"
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: { xs: 6, sm: 12 },
          position: "relative",
        }}
      >
        <Box
          id="hero-section"
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            py: { xs: 20, sm: 14, lg: 25 },
            height: { xs: 645, sm: 550, lg: 850, xl: 900 },
            backgroundColor: Colors.primary,
            backgroundImage: {
              xs: "transparent",
              sm: `url("/images/hero-image.svg")`,
            },
            backgroundSize: "cover",
            backgroundPosition: { xs: "right center", xl: "right center" },
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", sm: "flex-start" },
              alignItems: { xs: "center", sm: "flex-start" },
              px: { xs: 1.2, sm: 3, lg: 12.5, xl: 16 },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "100%", sm: 550, xl: 724 },
                display: "flex",
                flexDirection: "column",
                justifyContent: { xs: "center", sm: "flex-start" },
                alignItems: { xs: "center", sm: "flex-start" },
                gap: "20px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: "#0C1419",
                  font: {
                    xs: `normal normal 500 normal 11.4px/16px ${Fonts.primaryMedium}`,
                    sm: `normal normal 500 normal 14.88px/16px ${Fonts.primaryMedium}`,
                  },
                  border: `1px solid #FFDA79`,
                  borderRadius: "20px",
                  height: 40,
                  background: "#FFDA79",
                  padding: "12px 16px",
                }}
              >
                Currently teaching Kids Across 18 Countries in Different Time
                Zones!
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  width: "100%",
                  color: "#FFFFFF",
                  font: {
                    xs: `normal normal 700 normal 32px/44px ${Fonts.primaryBold}`,
                    sm: `normal normal 700 normal 40px/50.72px ${Fonts.primaryBold}`,
                    xl: `normal normal 700 normal 50px/62.72px ${Fonts.primaryBold}`,
                  },
                  letterSpacing: { xs: -0.64, sm: 0.25 },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                Empower Your kids with Coding, AI, and Design Skills on Their
                Preferred Schedule.
              </Typography>
              <Box
                component="span"
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    font: {
                      xs: `normal normal 400 normal 14px/20px ${Fonts.primary}`,
                      xl: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                    },
                    letterSpacing: 0.25,
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  They&apos;ll gain the programming knowledge, skills, and
                  confidence to become creators in the digital world while
                  solving real-world problems.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  alignItems: { xs: "center", sm: "flex-start" },
                  mt: { xs: 4, sm: 0 },
                }}
              >
                <Button
                  onClick={() => router.push("/signup")}
                  sx={{
                    width: { xs: "100%", sm: 165.2 },
                    height: 40,
                    padding: "12px 18px",
                    font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
                    color: "#0C1419",
                    textTransform: "none",
                    letterSpacing: 0.25,
                    border: `1px solid ${Colors.light}`,
                    borderRadius: "8px",
                    background: Colors.light,
                    "&:hover": {
                      background: Colors.light,
                    },
                  }}
                >
                  Register my child
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* STUDENTS */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "32px",
          background: "#F9F9F9",
          py: { xs: 15, sm: 25 },
          height: { xs: "100%", sm: 840 },
        }}
      >
        <Box
          sx={{
            width: "100%",

            px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              color: "#0C1419",
              font: {
                xs: `normal normal 700 normal 29px/40px ${Fonts.primaryBold}`,
                sm: `normal normal 700 normal 50px/62.72px ${Fonts.primaryBold}`,
              },
              textAlign: "center",
            }}
          >
            Everyday Students: Extraordinary Results
          </Typography>
          <Box
            component="span"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                maxWidth: 724,
                color: "#0C1419",
                font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                letterSpacing: 0.25,
                textAlign: "center",
              }}
            >
              Explore the amazing accomplishments of students in coding, AI, and
              design, and see the incredible projects they create.
            </Typography>
          </Box>
        </Box>

        <StudentImages />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
          py: { xs: 15, sm: 25 },
          gap: "32px",
          backgroundImage: `url("/images/svgs/grid-bg.svg")`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              width: "100%",
              color: "#0C1419",
              font: {
                xs: `normal normal 700 normal 29px/40px ${Fonts.primaryBold}`,
                sm: `normal normal 700 normal 50px/62.72px ${Fonts.primaryBold}`,
              },
              textAlign: "center",
            }}
          >
            Innovative Learning: Fun, Impactful Online Class
          </Typography>
          <Box
            component="span"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                maxWidth: 724,
                color: "#0C1419",
                font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                letterSpacing: 0.25,
                textAlign: "center",
              }}
            >
              All your child&apos;s learning needs are here! From their
              assignments to projects to the course roadmap, we&apos;ve got it
              covered.
            </Typography>
          </Box>
        </Box>

        <Image
          src={heroImage}
          width={1339}
          height={915}
          alt="hero background image"
        />
      </Box>
      {/* SECTION TWO */}
      <Box
        id="alumi-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0C1419",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 3, lg: 12.5, xl: 16 },
          py: 12,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1264,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              src={"/images/smiling-people.svg"}
              width={1200}
              height={1200}
              alt="People smiling"
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              flexGrow: "1 0 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#0C1419",
                  font: `normal normal 500 normal 14.88px/16px ${Fonts.primaryMedium}`,
                  border: `1px solid #FFDA79`,
                  borderRadius: "20px",
                  height: 40,
                  width: 245,
                  background: "#FFDA79",
                  padding: "12px 16px",
                }}
              >
                Expertly Curated Instructors
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    width: "100%",
                    color: "#FF5E00",
                    font: {
                      xs: `normal normal 700 normal 28px/30px ${Fonts.primaryBold}`,
                      sm: `normal normal 700 normal 40px/50px ${Fonts.primaryBold}`,
                      xl: `normal normal 700 normal 45px/50px ${Fonts.primaryBold}`,
                    },
                    letterSpacing: { xs: -0.64, sm: 0.25 },
                    textAlign: "left",
                  }}
                >
                  A tapestry of brilliance.
                </Typography>
                <Box
                  component="span"
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      font: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                      letterSpacing: 0.25,
                      textAlign: "left",
                    }}
                  >
                    Our instructors are alumni and experts from top universities
                    and tech companies, bringing real-world knowledge and
                    passion directly to your kids.
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
              }}
            >
              <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
                <Image
                  src="/images/uni-surrey.png"
                  alt="university of Surrey"
                  width={137}
                  height={32}
                  priority
                />{" "}
                <Image
                  src="/images/uni-illinois.png"
                  alt="Illinois university"
                  width={137}
                  height={32}
                  priority
                />{" "}
                <Image
                  src="/images/caltech.png"
                  alt="Caltech"
                  width={100}
                  height={22}
                  priority
                />
                <Image
                  src="/images/uni-california.png"
                  alt="University of california"
                  priority
                  width={141}
                  height={40}
                />
              </Box>
              <Box sx={{ width: "100%", display: "flex", gap: 2 }}>
                <Image
                  src="/images/springboard.png"
                  alt="springboard"
                  width={214}
                  height={36}
                  priority
                />
                <Image
                  src="/images/synthesis.png"
                  alt="synthesis"
                  width={228}
                  height={32}
                  priority
                />
                <Image
                  src="/images/andela.png"
                  alt="Andela"
                  width={143}
                  height={36}
                  priority
                />
              </Box>
            </Box>
            <Box sx={{ display: { xs: "block", sm: "none" }, mt: 2 }}>
              <Image
                style={{ width: "100%", height: "100%" }}
                src={"/images/smiling-people.svg"}
                width={1300}
                height={1300}
                alt="People smiling"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                alignItems: { xs: "center", sm: "flex-start" },
                mt: 3,
              }}
            >
              <Button
                onClick={() => router.push("/signup")}
                sx={{
                  width: 165.2,
                  height: 40,
                  padding: "12px 18px",
                  font: `normal normal 500 normal 14px/20px ${Fonts.primaryMedium}`,
                  color: Colors.light,
                  textTransform: "none",
                  letterSpacing: 0.25,
                  border: `1px solid ${Colors.primary}`,
                  borderRadius: "8px",
                  background: Colors.primary,
                  "&:hover": {
                    background: Colors.primary,
                  },
                }}
              >
                Register my child
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* EXPLORE COURSES */}
      <Box
        id="explore-courses"
        component="div"
        sx={{
          width: "100%",
          display: "flex",

          py: { xs: 8.5, md: 12.5 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            px: { xs: 2, sm: 3, lg: 12.5 },
          }}
        >
          <Box
            component="h2"
            sx={{
              width: "100%",
              font: `normal normal 700 normal 32px/27px ${Fonts.primaryBold}`,
              textAlign: "center",
              letterSpacing: 0.25,
              color: "#091135",
            }}
          >
            Explore Learning Paths
          </Box>
          <HomeCoursesTab />
        </Box>
      </Box>
      {/* TESTIMONIES */}
      {/* <Box
        id="testimony-section"
        component="div"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          background: "#F6F8FA",
          py: { xs: 2, md: 12.5 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            px: { xs: 2, sm: 3, lg: 12.5 },
          }}
        >
          <Box
            component="h2"
            sx={{
              width: "100%",
              font: `normal normal 700 normal 32px/27px ${Fonts.primary}`,
              textAlign: "center",
              letterSpacing: 0.25,
              color: "#091135",
            }}
          >
            Don’t take it from us
          </Box>
          <Typography
            variant="h4"
            sx={{
              maxWidth: 633,
              font: `normal normal 400 normal 18px/27px ${Fonts.primary}`,
              textAlign: "center",
              color: "#36394A",
              letterSpacing: 0.25,
              my: 1,
            }}
          >
            Tailored to their interests, and taught by experienced instructors.
            Choose the learning path according to your child’s needs and goals.
          </Typography>
        </Box>
        <Testimonies />
      </Box> */}
      <Box
        id="alumi-section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: Colors.primary,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 3, lg: 8, xl: 12 },
          py: 2,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1264,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              flexGrow: "1 0 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                flexGrow: "1 0 0",
              }}
            >
              <Typography
                sx={{
                  maxWidth: 606,
                  color: "#FFFFFF",
                  font: {
                    xs: `normal normal 400 normal 17px/24px ${Fonts.primary}`,
                    lg: `normal normal 400 normal 18px/28px ${Fonts.primary}`,
                  },
                  letterSpacing: 0.25,
                  textAlign: "left",
                }}
              >
                As a tech entrepreneur, I&apos;ve seen firsthand the value of
                coding skills. It&apos;s not just about programming, but also
                about developing problem-solving and critical thinking. Peer
                Learning&apos;s approach has been fantastic. They&apos;re
                learning valuable skills while building confidence. I highly
                recommend.
              </Typography>
              <Box
                sx={{
                  font: `normal normal 400 normal 15px/22px ${Fonts.primary}`,
                  fontFeatureSettings: `cv04' on, 'cv03' on, 'cv01' on;`,
                  color: "rgba(255, 255, 255, 0.7)",
                }}
              >
                Hameed, Alabama, United States
              </Box>
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "relative" }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  display: "block",
                }}
                src={"/images/mr-hameed.jpeg"}
                width={487}
                height={462}
                alt="People smiling"
              />
            </Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                display: "block",
              }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 8,
                  display: "block",
                }}
                src="/images/play.svg"
                width={487}
                height={462}
                alt="Play"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

HomePage.getLayout = function getLayout(page) {
  return <HomePageLayout>{page}</HomePageLayout>
}
