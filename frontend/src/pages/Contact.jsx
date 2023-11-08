import "../styles/Contact.scss";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="form">
        <form action="" method="get">
          <h2 className="contact_title">
            Une question ou une recommandation ?
          </h2>
          <h3 className="contact_subtitle">
            N’hésites surtout pas à nous contacter, on se fera un plaisir de
            répondre à ta requête !
          </h3>
          <div className="input-group">
            <input
              type="text"
              name="name"
              className="input-group_input"
              required
            />
            <label htmlFor="name" className="input-group_label" id="name">
              Nom
            </label>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="email"
              className="input-group_input"
              required
            />
            <label htmlFor="email" className="input-group_label">
              Adresse e-mail
            </label>
          </div>
          <div className="input-group">
            <textarea
              type="textarea"
              rows="15"
              name="msg"
              className="input-group_input"
              id="msg"
              required
            />
            <label htmlFor="text" className="input-group_label">
              Votre message
            </label>
          </div>
          <div id="sub_pos">
            <input className="submit" type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
