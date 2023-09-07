import NarbarSearch from "./NavrbarSearch"

const Navbar = () => {
  return (
    <div className="aboslute top-0 w-full sm:flex-row flex-col items-center flex sm:items-center justify-between px-[12px] mt-[20px] sm:px-[94px] h-[112px]">
      <img className="w-[120px]" src="/logo.png" alt="logo" />
      <NarbarSearch />
    </div>
  )
}

export default Navbar
