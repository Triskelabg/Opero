interface BlockDescriptionImageProps {
    image: string;
    description: string;
    title: string;
    reverse?: boolean; // Optionnel : indique si l'image doit être inversée avec le texte
    middle?: boolean
}

export default function BlockDescriptionImage({
    image,
    description,
    title,
    reverse = false, // Valeur par défaut : image à droite
    middle = false,
}: BlockDescriptionImageProps) {
    return (
        <div
            className={`grid ${reverse ? "grid-cols-[4fr,3fr]" : "grid-cols-[3fr,4fr]"
                } items-center justify-center gap-[40px] p-[75px] bg-white`}
        >
            {/* Si reverse est vrai, on inverse l'ordre des colonnes */}
            {!reverse && (
                <div className="p-2">
                    <h2 className="text-[#06102E] font-almarai text-[24px] font-light leading-[30px] tracking-[0.48px] mb-4">
                        {title}
                    </h2>
                    <p className="text-justify text-[#06102E] font-almarai text-[16px] font-light leading-[22px] tracking-[0.32px]">
                        {description}
                    </p>
                </div>
            )}

            {middle ? (
                <div className="justify-self-center">
                    <img className="rounded-[30px]" src={image} alt="" />
                </div>
            ) : (
                <div className={reverse ? "justify-self-start" : "justify-self-end"}>
                    <img className="rounded-[30px]" src={image} alt="" />
                </div>
            )}



            {reverse && (
                <div className="p-2">
                    <h2 className="text-[#06102E] font-almarai text-[24px] font-light leading-[30px] tracking-[0.48px] mb-4">
                        {title}
                    </h2>
                    <p className="text-justify text-[#06102E] font-almarai text-[16px] font-light leading-[22px] tracking-[0.32px]">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
}
