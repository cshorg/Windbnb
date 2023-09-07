interface StayCardProps {
  stay: {
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
}

const StayCard: React.FC<StayCardProps> = ({ stay }) => {
  return (
    <div className="sm:w-[395px] w-[350px]">
      <img
        className="sm:w-[395px] w-[350px] sm:h-[270px] h-[238px] rounded-[24px] object-cover hover:opacity-80 cursor-pointer transition-all ease-in"
        src={stay.photo}
        alt="image"
      />
      <div className="mt-[15px] flex items-center justify-between">
        <div className="flex items-center space-x-2 ">
          {stay.superHost && (
            <div className="w-[100px] h-[28px] border-[1px] border-[#4f4f4f] pt-[1px] text-[#4f4f4f] flex items-center justify-center rounded-[12px] text-[12px] uppercase font-bold">
              Super Host
            </div>
          )}
          <div className="text-[#828282] text-[14px]">
            {stay.type} . {stay.beds}
          </div>
        </div>
        <div className="text-[14px] text-[#4f4f4f]">
          <a className="text-[#EB5757]">★</a> {stay.rating}
        </div>
      </div>
      <div className="text-[#333333] font-semibold mt-[10px]">{stay.title}</div>
    </div>
  )
}

export default StayCard
