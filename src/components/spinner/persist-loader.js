import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";
import { Colors } from "../themes/colors";
import { Fonts } from "../themes/fonts";

const style = {
  position: "fixed",
  top: "40%",
  left: "50%",
  marginTop: 3.5,
  backgroundColor: "#FFF",
  // marginLeft: -100,
};
const Spinner = () => {
  return (
    <Box component="div" sx={style}>
      <RotatingLines
        strokeColor="#EFEFEF"
        strokeWidth="1"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      <Box
        sx={{
          color: "#2B2B2B",
          font: `normal normal 500 14px/normal ${Fonts.primary}`,
          letterSpacing: "-0.28px",
        }}
      >
        Loading
      </Box>
    </Box>
  );
};

export default Spinner;
