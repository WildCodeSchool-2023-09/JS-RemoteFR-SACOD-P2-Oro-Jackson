import Navbar from "./Navbar";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="Form">
        <form action="" method="get">
          <h2>Laisse moi un message !</h2>
          <div className="SubForm">
            <label id="name">Nom :</label><br/>
            <input type="text" name="name" id="name" required/>
          </div>
            <div className="SubForm">
              <label id="email">Adresse e-mail :</label><br/>
              <input type="email" name="email" id="email" required/>
            </div>
            <div className="SubForm">
              <label id="Message">Votre message :</label><br/>
              <input type="text" name="msg" id="msg" required/>
            </div>
            <div className="SubmitFrom">
              <input id="submit" type="submit" value="Envoyer"/>
            </div>
        </form> 
      </div>
    </>
  );
}

export default Contact;
