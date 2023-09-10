import React, { useEffect, useState } from "react"

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

interface CounterProps {
  guests: number
  setGuests: (amount: number) => void
}

const Counter: React.FC<CounterProps> = ({ guests, setGuests }) => {
  const [amount, setAmount] = useState<number>(0)

  const handleAddition = () => {
    setAmount(amount + 1)
  }

  const handleSubtraction = () => {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  useEffect(() => {
    setGuests(amount)
  }, [amount])

  return (
    <div className="flex items-center gap-[15px]">
      <button
        onClick={handleSubtraction}
        className="h-[24px] w-[24px] flex items-center  justify-center rounded-[4px] border-[1px] border-[#828282] text-[#828282] cursor-pointer"
      >
        <AiOutlineMinus size={11} />
      </button>
      <span>{amount}</span>
      <button
        onClick={handleAddition}
        className="h-[24px] w-[24px] flex items-center  justify-center rounded-[4px] border-[1px] border-[#828282] text-[#828282] "
      >
        <AiOutlinePlus size={11} />
      </button>
    </div>
  )
}

const GuestDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [guests, setGuests] = useState<number>(0)

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-[425px] h-[55px] rounded-[16px] ${
          isOpen ? "border-[#333333]" : "border-white"
        }  border-[1px] outline-none pl-[25px] pt-[16px] text-[14px] text-[#333333] cursor-pointer`}
      >
        <label className="absolute top-0 left-[26px] text-[9px] uppercase pt-[12px] font-bold">
          Guests
        </label>
        {guests > 0 ? (
          <div className="pt-[10px] text-[14px]">{guests + " guests"}</div>
        ) : (
          <div className="pt-[10px] text-[14px] text-[#BDBDBD]">Add Guests</div>
        )}
      </div>
      {isOpen && (
        <div className="pl-[28px]">
          <div className="mt-[48px]">
            <div className="font-semibold text-[#333333]">Adults</div>
            <div className="text-[#BDBDBD]">Ages 13 or above</div>
            <div className="mt-[10px]">
              {<Counter guests={guests} setGuests={setGuests} />}
            </div>
          </div>
          <div className="mt-[52px]">
            <div className="font-semibold text-[#333333]">Children</div>
            <div className="text-[#BDBDBD]">Ages 2-12</div>
            <div className="mt-[10px]">
              {<Counter guests={guests} setGuests={setGuests} />}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GuestDropdown
