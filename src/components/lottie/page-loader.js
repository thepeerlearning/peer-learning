import { useLottie } from "lottie-react"
import pageLoaderJson from "./page-loader.json"

const style = {
  height: 220,
}

const PageLoader = () => {
  const options = {
    animationData: pageLoaderJson,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}

export default PageLoader
