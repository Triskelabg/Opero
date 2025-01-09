import image1 from '../assets/images/rejoignez-nous.png'

interface RejoignezNousProps {
    title: string;
    description: string;
    buttonText: string;
    className: string;
  }

  
  export default function RejoignezNous({title, description, buttonText, className }: RejoignezNousProps) {
    return (
      <div className="pl-[22px] pr-[22px] flex relative h-[465px] mb-[20px]">
        {/* Image de fond */}
        <div
          className={`flex-shrink-0 relative rounded-[30px] overflow-hidden shadow-lg h-[465px] w-full  bg-no-repeat bg-[length:100%_100%] bg-[position:10%_80%] ${className}`}
          style={{ backgroundImage: `url(${image1})` }}
        >
          {/* Gradient Overlay */}
  
          {/* Contenu centré */}
          <div className="absolute w-[50%] bg-custom-gradient  inset-0 flex flex-col items-start justify-center pl-10">
            <p className="text-white w-[58%] font-almarai text-[24px] font-light leading-[30px] tracking-[0.48px] ">
              {title}
            </p>
            <p className="text-white w-[62%] font-almarai text-[16px] font-light leading-[22px] tracking-[0.32px] mt-4">
              {description}
            </p>
            <button className="rounded-md
   mt-6 px-4 py-2text-[#06102E] text-center font-almarai text-[16px] font-normal leading-[36px] tracking-[1.28px] bg-white">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  }
  