import { useState } from "react"
import NavbarSearch from "./NavbarSearch"
import ExtendedSearch from "./ExtendedSearch"

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(true)

  return (
    <>
      {open === true ? (
        <div className="aboslute top-0 w-full sm:flex-row flex-col items-center flex sm:items-center justify-between px-[12px] mt-[20px] sm:px-[94px] h-[112px]">
          <img className="w-[120px]" src="/logo.png" alt="logo" />
          <NavbarSearch open={open} setOpen={setOpen} />
        </div>
      ) : (
        <div className="aboslute top-0 w-full mt-[20px] h-[112px]">
          <ExtendedSearch open={open} setOpen={setOpen} />
        </div>
      )}
    </>
  )
}

export default Navbar
