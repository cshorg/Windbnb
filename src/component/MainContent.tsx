import { useEffect, useState } from "react"
import axios from "axios"
import ContentHeader from "./ContentHeader"
import StayCard from "./StayCard"

interface Stay {
  city: string
  country: string
  photo: string
  title: string
  type: string
  beds: number
  maxGuests: number
  rating: number
  superHost: boolean
}

const MainContent = () => {
  const [data, setData] = useState<Stay[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios
      .get("/stays.json")
      .then((response) => setData(response.data as Stay[]))
      .catch((error) => setError(error.message))
  }, [])

  return (
    <div className="font-custom sm:px-[94px] px-[12px] lg:max-w-[100%] max-w-[1440px] mt-[40px] mb-[40px]">
      <ContentHeader location={"Finland"} stays={"16"} />
      <div className="mt-[32px] grid sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-1 2xl:gap-[100px] gap-[34px]">
        {error && <div>{error}</div>}
        {data &&
          data.map((stay, index) => <StayCard key={index} stay={stay} />)}
      </div>
    </div>
  )
}

export default MainContent
