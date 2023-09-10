const Input = () => {
  return (
    <div className="relative">
      <input
        className="w-[425px] h-[55px] rounded-[16px] focus:border-[1px] focus:border-[#333333] outline-none pl-[25px] pt-[16px] text-[14px] text-[#333333]"
        placeholder="Add Location"
        type="text"
      />
      <label className="absolute top-0 left-[26px] text-[9px] uppercase pt-[12px] font-bold">
        Location
      </label>
    </div>
  )
}

export default Input
