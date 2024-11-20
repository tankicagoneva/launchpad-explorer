import LaunchpadDetailsProvider from "../providers/LaunchDetailsProvider"
import { useParams } from "react-router-dom"
import LaunchInformation from "./launch-information"

const Launch = () => {
  const { id } = useParams()

  return (
    <LaunchpadDetailsProvider id={id}>
      <LaunchInformation />
    </LaunchpadDetailsProvider>
  )
}

export default Launch
