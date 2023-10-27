import Navbar from "./Navbar";
import "./Contact.scss";

function Contact() {
  return (
    <>
      <div className="Form">
        <form action="" method="get">
          <h2>Une question ou une recommendation ?</h2>
          <h3>N’hésites surtout pas à nous contacter, on se fera un plaisir de répondre à ta requête !</h3>
          <div className="input-group">
            <input type="text" name="name" className="input-group_input" required/>
            <label for="name" className="input-group_label">Nom</label>
          </div>
            <div className="input-group">
              <input type="text" name="email" className="input-group_input" required/>
              <label for="email" className="input-group_label">Adresse e-mail</label>
            </div>
            <div className="input-group">
              <textarea type="textarea" rows="20" cols="50" name="msg" className="input-group_input" id="msg" required/>
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