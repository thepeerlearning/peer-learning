import { Box, Typography } from "@mui/material"
import React from "react"
import { Fonts } from "../../../components/themes/fonts"
import { Colors } from "../../../components/themes/colors"
import { SubmitButton } from "../../../components/forms/buttons"

export default function LegalVersion() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        alignSelf: "stretch",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          width: "100%",
          color: "#091135",
          maxWidth: 570,
          font: `normal normal 400 normal  18px/28px  ${Fonts.secondary}`,
          color: Colors.textColor,
        }}
      >
        Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
        suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
        montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
        vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
        varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in
        volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames
        arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique
        risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
        sodales id est ac volutpat.{" "}
      </Typography>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
          }}
        >
          What information do we collect?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            maxWidth: 570,
            font: `normal normal 400 normal 15px/24px ${Fonts.secondary}`,
            color: Colors.textColor,
          }}
        >
          Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
          suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis
          montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere
          vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien
          varius id. Eget quis mi enim, leo lacinia pharetra, semper. Eget in
          volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames
          arcu quis fusce augue enim. Quis at habitant diam at. Suscipit
          tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum
          molestie aliquet sodales id est ac volutpat.{" "}
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
          }}
        >
          How do we use your information?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            maxWidth: 570,
            font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
            color: Colors.textColor,
          }}
        >
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis
          mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet
          commodo consectetur convallis risus. Sed condimentum enim dignissim
          adipiscing faucibus consequat, urna. Viverra purus et erat auctor
          aliquam. Risus, volutpat vulputate posuere purus sit congue convallis
          aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque
          ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget
          nunc lectus in tellus, pharetra, porttitor. Ipsum sit mattis nulla
          quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque
          congue eget consectetur turpis. Sapien, dictum molestie sem tempor.
          Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor
          tellus. Sed vel, congue felis elit erat nam nibh orci.
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
          }}
        >
          Do we use cookies and other tracking technologies?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            maxWidth: 570,
            font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
            color: Colors.textColor,
          }}
        >
          Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis
          aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut
          eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque
          ac.
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
          }}
        >
          How long do we keep your information?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            maxWidth: 570,
            font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
            color: Colors.textColor,
          }}
        >
          Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis
          aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut
          eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque
          ac.
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
          }}
        >
          How do we keep your information safe?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            maxWidth: 570,
            font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
            color: Colors.textColor,
          }}
        >
          Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis
          aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut
          eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque
          ac.
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
          }}
        >
          What are your privacy rights?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            maxWidth: 570,
            font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
            color: Colors.textColor,
          }}
        >
          Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis
          aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut
          eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque
          ac.
        </Typography>
      </Box>
      <Box
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
          }}
        >
          How can you contact us about this policy?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            maxWidth: 570,
            font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
            color: Colors.textColor,
          }}
        >
          Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas
          sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor
          rutrum lacus malesuada massa ornare et. Vulputate consectetur ac
          ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim
          massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac
          elementum gravida cursus dis.
        </Typography>
        <Box component="ol" sx={{ m: 0, pl: 2 }}>
          <Box component="li">
            <Typography
              variant="h6"
              sx={{
                width: "100%",
                maxWidth: 570,
                font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
                color: Colors.textColor,
              }}
            >
              Lectus id duis vitae porttitor enim gravida morbi.{" "}
            </Typography>
          </Box>
          <Box component="li">
            <Typography
              variant="h6"
              sx={{
                width: "100%",
                maxWidth: 570,
                font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
                color: Colors.textColor,
              }}
            >
              Eu turpis posuere semper feugiat volutpat elit, ultrices
              suspendisse. Auctor vel in vitae placerat.
            </Typography>
          </Box>{" "}
          <Box component="li">
            <Typography
              variant="h6"
              sx={{
                width: "100%",
                maxWidth: 570,
                font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
                color: Colors.textColor,
              }}
            >
              Suspendisse maecenas ac donec scelerisque diam sed est duis purus.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          mt: "64px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            width: "100%",
            font: `normal normal 600 normal 30px/28px ${Fonts.primary}`,
            textAlign: "center",
          }}
        >
          Start your free trial
        </Typography>
        <Typography
          variant="h6"
          sx={{
            width: "100%",
            maxWidth: 570,
            font: `normal normal 400 normal 18px/28px ${Fonts.secondary}`,
            color: Colors.textColor,
            textAlign: "center",
          }}
        >
          Join over 4,000+ startups already growing with Untitled.
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            mt: "32px",
          }}
        >
          <Box
            sx={{
              width: 128,
              height: 48,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 18px",
              borderRadius: 1,
              border: `1px solid #D0D5DD`,
              background: Colors.light,
              color: Colors.secondary,
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              cursor: "pointer",
              font: `normal normal 600 normal 16px/20px ${Fonts.primary}`,
            }}
          >
            Learn more
          </Box>
          <Box
            sx={{
              width: 128,
              height: 48,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px 18px",
              borderRadius: 1,
              border: `1px solid #D0D5DD`,
              background: Colors.primary,
              color: Colors.light,
              boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
              cursor: "pointer",
              font: `normal normal 600 normal 16px/20px ${Fonts.primary}`,
            }}
          >
            Get started
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
