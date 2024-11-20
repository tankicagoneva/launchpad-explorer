import { API_URL_LAUNCHPADS } from "@/config/apiLaunchpadConfig"
import { createContext, useContext, useEffect, useState } from "react"
import { Launchpad } from "@/types/launchpad"

const LaunchDetailsContext = createContext<{
  launchpadDetails: Launchpad | null
  error: boolean
  loading: boolean
}>({ launchpadDetails: null, error: false, loading: false })

export const useLaunchDetailsContext = () => useContext(LaunchDetailsContext)

const LaunchpadDetailsProvider = ({
  id,
  children,
}: {
  id?: string
  children: JSX.Element
}) => {
  const [launchpadDetails, setLaunchpadDetails] = useState<Launchpad | null>(
    null
  )
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<boolean>(false)

  const fetchLaunchDetails = async () => {
    try {
      setError(false)
      setLoading(true)
      const response = await fetch(`${API_URL_LAUNCHPADS}/${id}`)
      const launchpad = await response.json()
      setLaunchpadDetails(launchpad)
    } catch (error) {
      console.error("Error fetching launch details:", error)
      setError(true)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchLaunchDetails()
  }, [id])

  return (
    <LaunchDetailsContext.Provider value={{ launchpadDetails, loading, error }}>
      {children}
    </LaunchDetailsContext.Provider>
  )
}

export default LaunchpadDetailsProvider
