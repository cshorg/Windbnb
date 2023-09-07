interface ContentHeaderProps {
  location: string
  stays: string
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ location, stays }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-bold text-[24px] text-[#4F4F4F]">
        Stays in {location}
      </div>
      <div className="font-semibold text-[12px] text-[#4F4F4F]">
        {stays}+ Stays
      </div>
    </div>
  )
}

export default ContentHeader
