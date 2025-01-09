import Footer from "../components/Footer";
import BanierSite from "../components/BanierSite";
import BlockTitleParagraph from "../components/BlockTitleParagraph";
import BlockDescriptionImage from "../components/BlockDescriptionImage";
import RejoignezNous from "../components/RejoignezNous";
import Navbar from "../components/Navbar";
import FixedMenu from "../components/FixedMenu";

import ImageBanierApropos from "../assets/images/banier-site/banier-apropos.png"
import image1 from "../assets/images/block-description-image/AdobeStock_758837529 1.png"
import image2 from "../assets/images/block-description-image/AdobeStock_603347830_Preview 1.png"


export default function APropos() {

    return (
        <section>
            <Navbar />
            <FixedMenu />
            <BanierSite image={ImageBanierApropos} title={"Une plateforme dédiée à la santé."} />
            <BlockTitleParagraph title={"À propos d'Opero.tv"} description={"Bienvenue sur Opero.tv, une platefome dédiée à la formation initiale et continue pour les professionnels de santé. Pensée et développée par des experts (médecins, chirurgiens, pharmaciens,  diététiciens, infirmiers, kinésithérapeutes,... ) passionnés par leur métier et la transmission de leurs connaissances. Opero.tv a pour objectif de partager et d'améliorer les compétences de chaque professionnel de santé grâce à des formations pratico-pratiques de qualité."} />
            <BlockDescriptionImage title={"Notre mission"} description={"Chez Opero.tv, nous croyons fermement que la formation continue tout au long de la vie est la clé pour garantir des soins de santé de qualité. Nous partageons sur Opero.tv des formations dans de nombreuses spécialités médicales et paramédicales. Quelque soit votre métier de santé et mode d’exercice, vous trouverez sur Opero.tv des formations de santé innovantes pour un perfectionnement de vos connaissances et de vos compétences."} image={image1} />
            <BlockDescriptionImage title={"Engagement d'excellence"} description={"De la sélection des contenus à la conception des outils pédagogiques, nous visons à offrir un d’apprentissage de haute qualité. Nous sommes convaincus que la formation initiale et continue sont essentielles pour le développement professionnel et personnel des praticiens de santé, et nous nous engageons à proposer des contenus utiles pour vous."} image={image2} reverse={true} />
            <BlockTitleParagraph title={"Vos avis et remarques sont essentiels pour nous."} description={"Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter. Nous sommes toujours à la recherche de moyens pour améliorer nos formations et répondre aux besoins des professionnels de santé."} />
            <RejoignezNous title="Rejoignez-nous" description="Opero.tv est bien plus qu'une plateforme de formation de santé ; c'est un conglomérat de professionnels de santé engagé qui travaille pour approfondir les compétences." buttonText="Email : hello@opero.tv" className="" />
            <Footer />
        </section>
    )
}