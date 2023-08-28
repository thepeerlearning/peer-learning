import { useLottie } from "lottie-react";
import noActivity from "./resting-cat.json";

const style = {
  height: 120,
};
const NoActivity = () => {
  const options = {
    animationData: noActivity,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default NoActivity;
