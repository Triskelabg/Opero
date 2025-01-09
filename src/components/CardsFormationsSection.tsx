// interface CardsProps {
//     image: string;
//     title: string;
//     description: string;
//   }

import image1 from '../assets/images/card-formation/card-formation1.png';
import image2 from '../assets/images/card-formation/card-formation2.png';
import image3 from '../assets/images/card-formation/card-formation3.png';
import image4 from '../assets/images/card-formation/card-formation4.png';
import image5 from '../assets/images/card-formation/card-formation5.png';
import image6 from '../assets/images/card-formation/card-formation6.png';



import Cards from './Cards'
  
  export default function CardsFormationsSection() {
    return (
        <div className="p-6">
            <h2 className="text-[#06102E] font-almarai text-[24px] font-light leading-[30px] tracking-[0.48px] text-3xl mb-10 pl-10">Les dernières formations</h2>
            <div className="cardsSection grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-around  text-white" >
                <Cards title="Nom formation" description="Noms médecins intervenants" image={image1} />
                <Cards title="Nom formation" description="Noms médecins intervenants" image={image2} />
                <Cards title="Nom formation" description="Noms médecins intervenants" image={image3} />
                <Cards title="Nom formation" description="Noms médecins intervenants" image={image4} />
                <Cards title="Nom formation" description="Noms médecins intervenants" image={image5} />
                <Cards title="Nom formation" description="Noms médecins intervenants" image={image6} />
            </div>
        </div>
    );
  }
