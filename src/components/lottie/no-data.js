import { useLottie } from "lottie-react"
import noDataJson from "./no-data.json"

const style = {
  height: 120,
}
const NoDataFound = () => {
  const options = {
    animationData: noDataJson,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default NoDataFound
