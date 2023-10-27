import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <div>
      <form action="" method="get" class="form">
                <h3>Laisse moi un message !</h3>
                <div className="SubForm">
                    <label id="name">Nom :</label><br/>
                    <input type="text" name="name" id="name" required/>
                </div>
                <div className="SubForm">
                    <label id="email">Adresse e-mail :</label><br/>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className="SubForm">
                    <label id="name">Message :</label><br/>
                    <input type="text" name="msg" id="msg" required/>
                </div>
                <div className="SubFrom">
                    <input id="submit" type="submit" value="Envoyer"/>
               </div>
            </form> 
      </div>
    </>
  );
}

export default Contact;
