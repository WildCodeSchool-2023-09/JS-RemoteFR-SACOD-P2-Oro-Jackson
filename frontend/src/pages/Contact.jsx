import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/Contact.scss";

function Contact() {
  return (
    <div className="form">
      <h2 className="contact_title">A question or recommendation?</h2>
      <h3 className="contact_subtitle">
        Do not hesitate to contact us, we will be happy to answer your request!
      </h3>
      <Box
        component="form"
        sx={{
          maxWidth: "100%",
          "& .MuiOutlinedInput-root": {
            "& > fieldset": {
              borderColor: "#f9f9f9c5",
              borderRadius: "16px",
            },
            "&:hover fieldset": { borderColor: "#f9f9f9" },
            "&.Mui-focused fieldset": { borderColor: "#f9f9f9" },
          },
        }}
        autoComplete="off"
      >
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          label="Name"
          size="small"
          type="text"
        />
        <br />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          label="E-mail adress"
          size="small"
          type="email"
        />
        <br />
        <TextField
          required
          fullWidth
          margin="normal"
          id="outlined-required"
          className="msg"
          label="Your message"
          size="small"
          type="text"
          multiline
          rows={8}
        />
        <div id="sub_pos">
          <input className="submit" type="submit" value="Send" />
        </div>
      </Box>
    </div>
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
