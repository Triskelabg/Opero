interface BlockTitleParagraphProps {
    title: string;
    description: string;
  }
  
  export default function BlockTitleParagraph({ title, description }: BlockTitleParagraphProps) {
    return (
      <div className="grid grid-cols-[2fr,3fr] items-center justify-center gap-x-[80px] pl-10  pb-14 pt-14 pr-40 bg-white">
        <h2 className="text-[#06102E] font-almarai text-[24px] font-light leading-[30px] tracking-[0.48px]">
          {title}
        </h2>
        <p className="text-[#06102E] font-almarai text-[16px] font-light leading-[22px] tracking-[0.32px]">
          {description}
        </p>
      </div>
    );
  }

  