import image1 from "../assets/images/banier-principale-home/1.png"
import image2 from "../assets/images/banier-principale-home/2.png"
import image3 from "../assets/images/banier-principale-home/3.png"
import image4 from "../assets/images/banier-principale-home/4.png"
import image5 from "../assets/images/banier-principale-home/5.png"
import image6 from "../assets/images/banier-principale-home/6.png"
import image7 from "../assets/images/banier-principale-home/7.png"
import image8 from "../assets/images/banier-principale-home/8.png"
import image9 from "../assets/images/banier-principale-home/9.png"
import image10 from "../assets/images/banier-principale-home/10.png"
import image11 from "../assets/images/banier-principale-home/11.png"
import image12 from "../assets/images/banier-principale-home/12.png"
import image13 from "../assets/images/banier-principale-home/13.png"
import image14 from "../assets/images/banier-principale-home/14.png"
import image15 from "../assets/images/banier-principale-home/15.png"
import image16 from "../assets/images/banier-principale-home/16.png"
import image17 from "../assets/images/banier-principale-home/17.png"
import image18 from "../assets/images/banier-principale-home/18.png"
import image19 from "../assets/images/banier-principale-home/19.png"

export default function Banner() {
    const images = [
        { src: image1, width: 'w-[12%]', height: "h-[206.674px]", class: "'row-start-1 col-start-1" },
        { src: image2, width: 'w-[28%]', height: "h-[206.674px]", class: "'row-start-2 col-start-2" },
        { src: image3, width: 'w-[30%]', height: "h-[206.674px]", class: "'row-start-1 col-start-1 " },
        { src: image4, width: 'w-[19%]', height: "h-[206.674px]", class: "'row-start-1 col-start-1 " },
        { src: image5, width: 'w-[9.5%]', height: "h-[206.674px]", class: "'row-start-1 col-start-1" },
        { src: image6, width: 'w-[33%]', height: "h-[251.042px]", class: "'row-start-1 col-start-1 -ml-8" },
        { src: image7, width: 'w-[29%]', height: "h-[251.042px]", class: "'row-start-1 col-start-1 " },
        { src: image8, width: 'w-[19%]', height: "h-[176.573px]", class: "'row-start-1 col-start-1 " },
        { src: image9, width: 'w-[20%]', height: "h-[251.109px]", class: "'row-start-1 col-start-1 " },
        { src: image10, width: 'w-[10%]', height: "h-[249.042px]", class: "'row-start-1 col-start-1 " },
        { src: image11, width: 'w-[35%]', height: "h-[249.042px]", class: "'row-start-1 col-start-1 " },
        { src: image12, width: 'w-[15%]', height: "h-[249.042px]", class: "'row-start-1 col-start-1 " },
        { src: image13, width: 'w-[30%]', height: "h-[325.511px]", class: "'row-start-1 col-start-1 -mt-[76px]" },
        { src: image14, width: 'w-[8.5%]', height: "h-[248.975px]", class: "'row-start-1 col-start-1" },
        { src: image15, width: 'w-[8%]', height: "h-[249.042px]", class: "'row-start-1 col-start-1 " },
        { src: image16, width: 'w-[29.5%]', height: "h-[249.042px]", class: "'row-start-1 col-start-1 " },
        { src: image17, width: 'w-[30%]', height: "h-[249.042px]", class: "'row-start-1 col-start-1 " },
        { src: image18, width: 'w-[20%]', height: "h-[249.042px]", class: "'row-start-1 col-start-1 " },
        { src: image19, width: 'w-[11%]', height: "h-[249.042px]", class: "'row-start-1 col-start-1 " },
    ];

    return (
        <div className="relative w-full h-[900px] bg-slate-50 overflow-hidden mb-10">
            {/* Conteneur des images */}
            <div className="flex flex-wrap gap-1">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`${image.width} ${image.height} ${image.class} relative overflow-hidden`}
                    >
                        <img
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Overlay sombre */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Texte et bouton */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-4">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] flex flex-col items-center text-center space-y-4">
                        <div className="grid grid-cols-[repeat(15,auto)] gap-x-2">
                            <svg className="col-span-2" xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                                <path d="M21.3216 0.105042C34.7436 0.105042 42.6433 9.31477 42.6433 21.1552C42.6433 32.9956 34.7483 41.8711 21.3216 41.8711C7.89497 41.8711 0 32.6566 0 21.1552C0 9.65375 7.89497 0.105042 21.3216 0.105042ZM21.3216 34.4995C29.8884 34.4995 33.1045 27.8011 33.1045 21.1552C33.1045 14.1751 29.8837 7.47665 21.3216 7.47665C12.7596 7.47665 9.53876 14.1751 9.53876 21.1552C9.53876 28.1353 12.7596 34.4995 21.3216 34.4995Z" fill="white" />
                            </svg>
                            <svg className="col-span-2" xmlns="http://www.w3.org/2000/svg" width="33" height="40" viewBox="0 0 33 40" fill="none">
                                <path d="M18.9092 0.0551284H0.970459V6.86813H16.5174C20.5864 6.86813 24.2075 7.76094 24.2075 12.8408C24.2075 17.9208 20.5864 18.8136 16.5174 18.8136H0.970459V39.9162H9.71829V25.6218H18.9092C28.8244 25.6218 32.6694 19.3149 32.6694 12.8361C32.6694 6.35728 28.8244 0.050354 18.9092 0.050354V0.0551284Z" fill="white" />
                            </svg>
                            <div className="grid grid-rows-[repeat(3,auto)] gap-y-2 col-span-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="8" viewBox="0 0 31 8" fill="none">
                                    <path d="M30.2514 0.0551453H0.496338V7.42675H30.2514V0.0551453Z" fill="white" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="9" viewBox="0 0 31 9" fill="none">
                                    <path d="M30.2514 0.657715H0.496338V8.02932H30.2514V0.657715Z" fill="#64E7D2" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="8" viewBox="0 0 31 8" fill="none">
                                    <path d="M30.2514 0.539856H0.496338V7.91146H30.2514V0.539856Z" fill="white" />
                                </svg>
                            </div>
                            <svg className="col-span-2" xmlns="http://www.w3.org/2000/svg" width="36" height="40" viewBox="0 0 36 40" fill="none">
                                <path d="M33.5593 30.4821C33.283 26.4621 32.0537 22.275 27.7656 21.1578V21.048C32.1681 19.2624 34.0596 15.7437 34.0596 11.0553C34.0596 5.02525 29.5475 0.0551453 22.4149 0.0551453H0.9646V6.86815H19.2941C23.1963 6.86815 25.3118 8.54395 25.3118 12.3969C25.3118 16.2498 23.1963 18.0927 19.2941 18.0927H0.9646V39.921H9.71242V24.3423H18.4603C22.8628 24.3423 24.478 26.1852 25.0926 30.3723C25.5405 33.5568 25.4261 37.4049 26.4839 39.921H35.2317C33.6737 37.6866 33.7261 32.9982 33.5593 30.4869V30.4821Z" fill="white" />
                            </svg>
                            <svg className="col-span-2" xmlns="http://www.w3.org/2000/svg" width="45" height="42" viewBox="0 0 45 42" fill="none">
                                <path d="M22.8847 0.105042C36.7688 0.105042 44.9402 9.31477 44.9402 21.1552C44.9402 32.9956 36.7736 41.8711 22.8847 41.8711C8.9959 41.8711 0.829346 32.6566 0.829346 21.1552C0.829346 9.65375 9.00066 0.105042 22.8847 0.105042ZM22.8847 34.4995C31.7422 34.4995 35.0726 27.8011 35.0726 21.1552C35.0726 14.1751 31.7422 7.47665 22.8847 7.47665C14.0273 7.47665 10.6969 14.1751 10.6969 21.1552C10.6969 28.1353 14.0273 34.4995 22.8847 34.4995Z" fill="white" />
                            </svg>
                            <div className="self-end justify-self-center col-span-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M4.96587 9.72048C7.41046 9.72048 9.39218 7.7347 9.39218 5.28511C9.39218 2.83552 7.41046 0.849731 4.96587 0.849731C2.52127 0.849731 0.539551 2.83552 0.539551 5.28511C0.539551 7.7347 2.52127 9.72048 4.96587 9.72048Z" fill="white" />
                                </svg>
                            </div>
                            <svg className="col-span-2" xmlns="http://www.w3.org/2000/svg" width="35" height="42" viewBox="0 0 35 42" fill="none">
                                <path d="M23.0106 42H12.1711V9.50574H0.25V0.0429688H34.9364V9.50574H23.0106V42ZM14.2627 39.9088H20.9189V7.41457H32.8447V2.13891H2.34167V7.41457H14.2627V39.9088Z" fill="#64E7D2" />
                            </svg>
                            <svg className="col-span-2" xmlns="http://www.w3.org/2000/svg" width="39" height="42" viewBox="0 0 39 42" fill="none">
                                <path d="M19.3554 42C19.2458 42 19.141 42 19.0314 41.9904C15.8296 41.8281 13.7332 39.3025 13.6474 39.1975L13.5283 39.0542L13.4663 38.8776L0.0634766 0H9.18772C9.67848 0.0238718 11.3842 0.429692 12.8231 4.59293L19.4745 23.6856L26.5071 3.58554C27.8507 0.367626 29.323 0.0286461 29.7422 0H29.809H39.0047L25.2302 39.1115L25.0634 39.2786C23.2576 41.0881 21.3422 42 19.3602 42H19.3554ZM15.377 37.9991C15.7772 38.424 17.2256 39.8133 19.1553 39.9041C20.5847 39.9757 22.0093 39.3168 23.4149 37.9609L36.0459 2.09594H29.9614C29.7899 2.1962 29.1657 2.64977 28.4415 4.36853L20.2655 27.7485H18.6693L10.8458 5.28044C9.98341 2.78345 9.17817 2.20098 8.98282 2.09117H2.99373L15.3722 37.9943L15.377 37.9991Z" fill="#64E7D2" />
                            </svg>
                        </div>
                        <div>
                            <p className=" mt-2 text-white text-center font-almarai text-[26px] font-extralight leading-[36px] tracking-[1.28px]">
                                La plateforme de formation pour tous les professionnels de santé.
                            </p>
                            <button className="rounded-[4px]  mt-6 bg-[#64E7D2] px-6 text-[#06102E] text-center font-almarai text-[16px] font-normal leading-[36px] tracking-[1.28px]">
                                Je m'inscris
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
