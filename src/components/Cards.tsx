interface CardsProps {
    image: string;
    title: string;
    description: string;
  }
  
  export default function Cards({ image, title, description }: CardsProps) {
    return (
      <div className="h-[300px] w-[auto] rounded-lg relative overflow-hidden">
        <div
          className="h-full w-full rounded-[28px] flex flex-col items-start justify-end p-5 bg-cover bg-center"
          
          style={{ backgroundImage: `url(${image})` }}
        >
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b] via-black/0 to-[#06102e] rounded-[28px]"></div>

            <div className="text-white relative inset-0 bottom-10">
                <p>{title}</p>
                <p>{description}</p>
            </div>


        </div>
      </div>
    );
  }
  