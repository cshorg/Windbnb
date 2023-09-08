import React from "react"
import { AiOutlineSearch } from "react-icons/ai"

interface NavbarSearchProps {
  open: boolean
  setOpen: (isOpen: boolean) => void
}

export const NavbarSearch: React.FC<NavbarSearchProps> = ({
  open,
  setOpen
}) => {
  return (
    <div
      onClick={() => setOpen(!open)}
      className="h-[55px] w-[300px] shadow-custom rounded-[16px] flex items-center cursor-pointer"
    >
      <div className="text-[14px] px-[16px] border-r-[1px] h-full flex items-center w-[140px]">
        Helsinki, Finland
      </div>
      <div className="text-[14px] text-[#BDBDBD] px-[16px] border-r-[1px] h-full flex items-center w-[106px]">
        Add guests
      </div>
      <div className="flex items-center px-[19px] text-[#EB5757]">
        <AiOutlineSearch size={22} />
      </div>
    </div>
  )
}

export default NavbarSearch
