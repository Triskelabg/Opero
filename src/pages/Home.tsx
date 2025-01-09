import BanierInformation from "../components/BanierInformation"
import CardsFormationsSection from "../components/CardsFormationsSection";
import Faq from "../components/Faq";
import NewsSection from "../components/NewsSection";
import BanierPrincipaleHome from "../components/BanierPrincipaleHome";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FixedMenu from "../components/FixedMenu";

import image1 from '../assets/images/banier-info/banier-info1.jpeg';
import image2 from '../assets/images/banier-info/banier-info2.jpeg';
import image3 from '../assets/images/banier-info/banier-info3.jpeg';
import image4 from '../assets/images/banier-info/banier-info4.jpeg';
// import { Navbar } from "flowbite-react";


export default function Home() {

    return (
        <section>
            <Navbar />
            <FixedMenu />

            <BanierPrincipaleHome />
            <BanierInformation image={image1} title="Des formations adaptées aux professionnels de santé" description="Des formations pour tous les métiers  de la santé sous de nouveaux formats (DPC, E-learning, Vidéos, Capsule,...)." buttonText="J'y vais" className="bg-[length:120%_100%] bg-[position:40%_120%]" />
            <BanierInformation image={image2} title="Devenez enseignant Opero" description="Transmettez votre savoir et vos expériences  en partageant vos connaissances gratuitement et/ou pour générer des revenus." buttonText="J’enseigne" className="bg-[length:123%_105%] bg-[position:60%_100%]" />
            <BanierInformation image={image3} title="Pour les universités et les institutions de santé publiques ou privées" description="Créez votre espace de formation personnalisé et enrichissez de contenus produits par vos  équipes." buttonText="En savoir plus" className="bg-[length:126%_105%] bg-[position:10%_80%]" />

            <CardsFormationsSection />

            <BanierInformation image={image4} title="Une nouvelle vision de la formation médicale" description="Des formations pensées adaptées aux pratiques des professionnels de santé." buttonText="En savoir plus" className="bg-[length:110%_140%] bg-[position:30%_10%]" />

            <NewsSection />

            <Faq />

            <Footer />
        </section>
    )
}