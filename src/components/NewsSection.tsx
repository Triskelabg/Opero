// interface CardsProps {
//     image: string;
//     title: string;
//     description: string;
//   }

import CardsInfo from './CardsInfo'
  
  export default function CardsFormationsSection() {
    return (
        <div className="p-6">
            <h2 className="text-[#06102E] font-almarai text-[24px] font-light leading-[30px] tracking-[0.48px] text-3xl mb-10 pl-10">Les actualités</h2>
            <div className="cardsSection grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-between gap-4" >
                <CardsInfo title="Une nouvelle vision de la formation médicale." description="Lorem ipsum doloit" />
                <CardsInfo title="Des formations adaptés à chaque médecins." description="Lorem ipsum doloit" />
                <CardsInfo title="Une nouvelle vision de la formation médicale." description="Lorem ipsum doloit" />
            </div>
        </div>
    );
  }
