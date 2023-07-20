import { LineWave } from "react-loader-spinner";
import { Colors } from "../themes/colors";

const Spinner = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LineWave
        height="120"
        width="120"
        color={Colors.primary}
        ariaLabel="line-wave"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        firstLineColor=""
        middleLineColor=""
        lastLineColor=""
      />
    </div>
  );
};
export default Spinner;
