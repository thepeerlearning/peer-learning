import { Box, Grid, Link } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useState } from "react";
import { CircledArrow } from "../../components/svg";
import { Fonts } from "../../components/themes/fonts";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  borderWidth: `1px 1px 0px 0px`,
  borderStyle: "solid",
  borderColor: "#e7ecf1",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<CircledArrow />} {...props} />
))(() => ({
  backgroundColor: "#F9FAFB",
  textAlign: "left",
  font: `normal normal 700 14px/24px ${Fonts.secondary}`,
  color: "#0D1825",
  padding: "0 16px",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg) scale(1, 1)",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  font: `normal normal 300 16px/150.9% ${Fonts.secondary}`,
  background: "#F9FAFB",
}));

export const questionbank = [
  {
    question: "Who is Peer Learning and where are they?",
    answer:
      "Ideal Robotics is a prominent ed-tech start-up that specializes in providing coding education to children. Over the course of the past five years, the company has established a strong reputation for excellence, with operations in both Nigeria and the United Kingdom.",
    link: "",
  },
  {
    question: "Who is Peer and where are they?",
    answer:
      "Lead Payroll is designed for small, medium, and large size organizations in both private and government sectors.",
    link: "",
  },
  {
    question: "Who is Peer and where are they?",
    answer:
      "Absolutely! Our solutions quickly adapt to your business’ unique needs. Whether you want to start mid-quarter, mid-month, or mid-year, we’ll get you up and running immediately.",
    link: "",
  },
  {
    question: "Who is Peer and where are they?",
    answer:
      "A payroll management system automates the manual jobs that might be wasting your time, resources, and productivity. When you integrate paperless, automatic solutions into your business, you save costs, increase ROI, and thrive in today’s competitive landscape.",
    link: "",
  },
];
export default function FrequentlyAskQuestion() {
  const [expanded, setExpanded] = useState("");
  const router = useRouter();
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        background: "rgba(249, 250, 251, 1)",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "70px",
        p: {
          xs: "155px 24px",
          sm: "150px 75px 15px 75px",
          md: "100px 75px 100px 75px",
        },
      }}
    >
      <Box
        component="h2"
        sx={{
          maxWidth: 750,
          font: {
            xs: `normal normal 700 18px/26px ${Fonts.secondary}`,
            sm: `normal normal 700 25px/36px ${Fonts.secondary}`,
          },
          textAlign: "center",
          color: "#0D1825",
          m: "0 auto",
        }}
      >
        Frequently Asked Questions (FAQs)
        <Box
          component="h4"
          sx={{
            width: "100%",
            maxWidth: 466,
            textAlign: "center",
            color: "#0D1825",
            m: "20px auto 0",
            font: {
              xs: `normal normal 300 15px/152.023% ${Fonts.secondary}`,
              sm: `normal normal 300 18px/152.023% ${Fonts.secondary}`,
            },
          }}
        >
          If others are inquiring, it&apos;s likely that you have similar
          thoughts. To assist you, here are some useful answers.
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          flexGrow: 1,
          maxWidth: 1080,
          m: "40px 0px",
          px: 2,
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            border: `1px solid #e7ecf1`,
            position: "relative",
          }}
        >
          <Grid container spacing={2}>
            {questionbank.map((quest, i) => (
              <Grid item xs={12} key={i}>
                <Accordion
                  expanded={expanded === `panel${i + 1}`}
                  onChange={handleChange(`panel${i + 1}`)}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    {quest.question}
                  </AccordionSummary>
                  <AccordionDetails>
                    {quest.link !== "" ? (
                      <>
                        {quest.answer} Click{" "}
                        <Link
                          href="/contact"
                          underline="always"
                          sx={{ fontWeight: 600 }}
                        >
                          here
                        </Link>{" "}
                        for more detail
                      </>
                    ) : (
                      quest.answer
                    )}
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            width: 200,
            margin: "40px auto 0",
            textAlign: "center",
            font: `normal normal 700 15px/22px ${Fonts.secondary}`,
            color: "#0D1825",
            letterSpacing: "-0.32px",
            cursor: "pointer",
          }}
          onClick={() => router.push("/contact-us")}
        >
          See all FAQs
        </Box>
      </Box>
    </Box>
  );
}
