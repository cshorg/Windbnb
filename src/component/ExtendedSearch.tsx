import React from "react"
import Button from "./Button"
import Input from "./Input"
import GuestDropdown from "./GuestsDropdown"

interface ExtendedSearchProps {
  open: boolean
  setOpen: (isOpen: boolean) => void
}

const ExtendedSearch: React.FC<ExtendedSearchProps> = ({ open, setOpen }) => {
  return (
    <div className="fixed w-full h-full bg-black bg-opacity-40">
      <div className="h-[460px] fixed top-0 w-full bg-white shadow-md flex justify-center pt-[94px]">
        <div className="w-[1250px] h-[55px] rounded-[16px] shadow-custom flex items-center">
          <div className="w-[426px] border-r-[1px] h-full">
            <Input />
          </div>
          <div className="w-[426px] border-r-[1px] h-full">
            <GuestDropdown />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="w-[426px] flex justify-center"
          >
            <Button />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtendedSearch
