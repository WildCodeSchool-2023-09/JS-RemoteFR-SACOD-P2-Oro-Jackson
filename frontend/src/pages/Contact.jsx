import "./Contact.scss";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="form">
        <form action="" method="get">
          <h2 className="contact_title">Une question ou une recommendation ?</h2>
          <h3 className="contact_subtitle">N’hésites surtout pas à nous contacter, on se fera un plaisir de répondre à ta requête !</h3>
          <div className="input-group">
            <input type="text" name="name" className="input-group_input" required/>
            <label for="name" className="input-group_label" id="name">Nom</label>
          </div>
            <div className="input-group">
              <input type="text" name="email" className="input-group_input" required/>
              <label for="email" className="input-group_label">Adresse e-mail</label>
            </div>
            <div className="input-group">
              <textarea type="textarea" rows="15" name="msg" className="input-group_input" id="msg" required/>
              <label for="text" className="input-group_label">Votre message</label>
            </div>
            <div id="sub_pos">
              <input className="submit" type="submit" value="Envoyer"/>
            </div>
        </form> 
      </div>
    </>
  );
}

export default Contact;

/*

Objet du formulaire de contact : Le formulaire de contact sur ce site web est destiné à permettre aux visiteurs de communiquer avec le propriétaire du site pour poser des questions, demander des informations ou fournir des commentaires.

Utilisation appropriée : En utilisant ce formulaire de contact, vous vous engagez à l'utiliser de manière appropriée et légale. Vous acceptez de ne pas soumettre de contenu offensant, diffamatoire, illégal ou inapproprié.

Collecte de données personnelles : Ce formulaire collecte des informations personnelles, y compris votre nom et votre adresse e-mail. En soumettant ce formulaire, vous consentez à la collecte, au stockage et au traitement de ces données conformément à notre politique de confidentialité.

Politique de confidentialité : Vous pouvez consulter notre politique de confidentialité pour en savoir plus sur la manière dont vos données personnelles sont traitées et protégées. Cette politique est accessible sur notre site web.

Anti-spam : L'utilisation de ce formulaire de contact à des fins de spam est strictement interdite. Des mesures de protection contre le spam peuvent être en place pour garantir un fonctionnement approprié du formulaire.

Droits de propriété intellectuelle : Tout contenu, y compris les messages envoyés via ce formulaire de contact, peut être soumis à des droits de propriété intellectuelle ou à des droits d'auteur. En soumettant du contenu, vous garantissez que vous avez le droit de le faire et que vous accordez au propriétaire du site une licence pour utiliser ce contenu.

Responsabilité : Le propriétaire du site ne peut être tenu responsable des dommages résultant de l'utilisation de ce formulaire de contact, y compris la perte de données ou les erreurs dans les messages soumis.

Modification des conditions : Le propriétaire du site se réserve le droit de modifier ces conditions générales à tout moment. Les utilisateurs sont encouragés à vérifier régulièrement les conditions générales mises à jour.

Consentement : En soumettant ce formulaire, vous consentez aux conditions générales énoncées ci-dessus.

Contact : Si vous avez des questions ou des préoccupations concernant l'utilisation de ce formulaire de contact, veuillez nous contacter à l'adresse e-mail indiquée sur le site web.

*/