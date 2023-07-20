import { Box } from "@mui/material";
import { MutatingDots } from "react-loader-spinner";
import { Colors } from "../themes/colors";

const style = {
  height: 140,
  position: "fixed",
  top: "50%",
  left: "50%",
  marginTop: 3.5,
  // marginLeft: -100,
};
const Spinner = () => {
  return (
    <Box component="div" sx={style}>
      <MutatingDots
        height="100"
        width="100"
        color={Colors.primary}
        secondaryColor={Colors.secondary}
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Box>
  );
};

export default Spinner;
