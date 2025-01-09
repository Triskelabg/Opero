import vector1 from '../assets/images/Vector 1.svg'

  export default function Cards( ) {
    return (
      <div className=" grid  grid-cols-[30%_1fr] gap-4 pl-20 pr-10 mt-[50px]">
        <p>FAQ</p>
        <div className="grid grid-rows[1fr] grid-cols-[auto_1fr] gap-40 ">
            <div className="grid  grid-rows-[repeat(8,40px)]">
                <p className="self-center text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]" >Comment créer un compte sur Opero.tv ?</p>
                <p className="self-center text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]">Comment me connecter à mon compte ?</p>
                <p className="self-center text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]">Comment accéder aux formations disponibles ?</p>
                <p className="self-center text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]">Comment m'inscrire à une formation ?</p>
                <p className="self-center text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]">Comment accéder aux documents et vidéos des formations ?</p>
                <p className="self-center text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]">Comment devenir enseignant sur Opero.tv ?</p>
                <p className="self-center text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]">Comment créer et publier une formation ?</p>
                <p className="self-center text-[#06102E] font-almarai text-[18px] font-light leading-[26px] tracking-[0.36px]">Puis-je fixer le prix de mes formations ?</p>
            </div>
            <div className="grid grid-rows-[repeat(8,40px] align-middle">
                <img className="self-center" src={vector1} alt="Description" />
                <img className="self-center" src={vector1} alt="Description" />
                <img className="self-center" src={vector1} alt="Description" />
                <img className="self-center" src={vector1} alt="Description" />
                <img className="self-center" src={vector1} alt="Description" />
                <img className="self-center" src={vector1} alt="Description" />
                <img className="self-center" src={vector1} alt="Description" />
                <img className="self-center" src={vector1} alt="Description" />
            </div>
        </div>    
      </div>
    );
}
