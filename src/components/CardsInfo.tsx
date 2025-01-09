import group37 from "../assets/images/Group 37.svg"


interface CardsInfoProps {
    title: string;
    description: string;
  }

  
  export default function CardsInfo({ title, description }: CardsInfoProps) {
    return (
      <div className="rounded-custom-20 border-2 border-custom-border bg-white w-[auto] h-[300px] grid align-center justify-center">
        <div className="grid grid-cols-[auto_1fr] gap-6">
            <div className="self-center" >
                <img src={group37} alt="" />
            </div>
            <div className="self-center grid grid-rows-[auto_auto_1fr] gap-4 w-[60%]">
                <p className="text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]" >{title}</p>
                <p className="text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]" >{description}</p>
                <button className="bg-[#06102E] pt-2 pb-2 text-white rounded-md w-[156px]" >En savoir plus</button>
            </div>
        </div>
      </div>
    );
  }
