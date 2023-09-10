import { useState, useEffect } from "react"
import axios from "axios"

import { MdLocationOn } from "react-icons/md"

const Input = () => {
  const [input, setInput] = useState<string>("")
  const [data, setData] = useState<any[]>()

  useEffect(() => {
    axios
      .get("/stays.json")
      .then((response) => setData(response.data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <div className="relative">
        <input
          className="w-[425px] h-[55px] rounded-[16px] focus:border-[1px] focus:border-[#333333] outline-none pl-[25px] pt-[16px] text-[14px] text-[#333333]"
          placeholder="Add Location"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <label className="absolute top-0 left-[26px] text-[9px] uppercase pt-[12px] font-bold">
          Location
        </label>
      </div>
      <div className="flex flex-col gap-[30px] mt-[40px] ml-[23px]">
        {data &&
          data
            .filter((location) => {
              return input.toLowerCase() === ""
                ? location
                : location.city.toLowerCase().includes(input.toLowerCase())
            })
            .slice(0, 5)
            .map((location, index) => (
              <div
                className="flex items-center text-[#4F4F4F] text-[14px] gap-1 cursor-pointer"
                key={index}
              >
                <MdLocationOn size={20} />
                {location.city + ", " + location.country}
              </div>
            ))}
      </div>
    </>
  )
}

export default Input
