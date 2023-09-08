import { AiOutlineSearch } from "react-icons/ai"

const Button = () => {
  return (
    <div className="bg-[#EB5757] w-[128px] rounded-[16px] h-[48px] text-white flex items-center justify-center gap-2">
      <AiOutlineSearch size={22} />
      Search
    </div>
  )
}

export default Button
