import Footer from "../components/Footer";
import BanierSite from "../components/BanierSite";
import BlockTitleParagraph from "../components/BlockTitleParagraph";
import BlockDescriptionImage from "../components/BlockDescriptionImage";
import RejoignezNous from "../components/RejoignezNous";
import Navbar from "../components/Navbar";
import FixedMenu from "../components/FixedMenu";

import ImageBanierApropos from "../assets/images/banier-site/banier-se-former.png"
import image1 from "../assets/images/block-description-image/AdobeStock_990133033 1.png"
import image2 from "../assets/images/block-description-image/WRmPTyhD_400x400 1.png"


export default function SeFormer() {

    return (
        <section>
            <Navbar />
            <FixedMenu />

            <BanierSite image={ImageBanierApropos} title={"Se former."} isSeformerPage={true}/>
            <BlockDescriptionImage title={"Les formations santé de Opero.tv"} description={"La plateforme Opero.tv regroupe des formations élaborées par des experts et des leaders d’opinion (KOL santé) dans leur domaine d’exercice. Ces formations de santé sont le fruit d’un travail collaboratif visant à fournir des contenus éducatifs de qualité, rigoureux et pratiques adaptés aux besoins actuels des professionnels de santé."} image={image1} />
            <BlockTitleParagraph title={"Des formations diversifiées"} description={"Les formations sont gratuites ou payantes sous différents formats, elles incluent des vidéos, des photos, des documents et des questionnaires pour évaluer ses compétences. Certaines formations sont certifiantes pour remplir ses obligations de formation continue de l’Agence Nationale du Développement Professionnel Continue. Pour rappel, chaque professionnel de santé doit suivre par période de 3 ans un parcours de DPC incluant de la formation et/ou de l’évaluation de pratiques professionnelles et/ou de la gestion des risques. Au minimum deux actions de deux types différents sont attendus pour répondre à son obligation de DPC."} />
            <BlockDescriptionImage title={"Engagement d'excellence"} description={"Toutes les formations sont rigoureusement vérifiées par nos ingénieurs pédagogiques pour assurer leur qualité et leur pertinence. Nous proposons des actions de formation de la gestion des risques et de l’évaluation des pratiques des professionnels. Certaines formations proposées par les institutions de santé ayant choisi Opero.tv sont agréées par l'ANDPC. En les suivants vous pouvez facilement valider vos obligations triennales de formations continues."} image={image2} reverse={true} middle={true} />
            <BlockTitleParagraph title={"Contactez-nous :"} description={"Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter."} />
            <RejoignezNous title="Rejoignez-nous" description="Opero.tv est bien plus qu'une plateforme de formation de santé ; c'est un conglomérat de professionnels de santé engagé qui travaille pour approfondir les compétences." buttonText="Email : hello@opero.tv" className="" />
            <Footer />
        </section>
    )
}