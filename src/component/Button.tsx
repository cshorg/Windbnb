import { AiOutlineSearch } from "react-icons/ai"

const Button = () => {
  return (
    <button className="bg-[#EB5757] hover:bg-opacity-90 transition-all ease-in w-[128px] rounded-[16px] h-[48px] text-white flex items-center justify-center gap-2">
      <AiOutlineSearch size={22} />
      Search
    </button>
  )
}

export default Button
