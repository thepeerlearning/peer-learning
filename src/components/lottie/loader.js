import { useLottie } from "lottie-react"
import loaderJson from "./loader.json"

const style = {
  height: 120,
}
const DataLoader = () => {
  const options = {
    animationData: loaderJson,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default DataLoader
