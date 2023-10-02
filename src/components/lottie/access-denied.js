import { useLottie } from "lottie-react";
import accessDenied from "./access-denied.json";

const style = {
  height: 250,
};
const AccessDenied = () => {
  const options = {
    animationData: accessDenied,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default AccessDenied;
