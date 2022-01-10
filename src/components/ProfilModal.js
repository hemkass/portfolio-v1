import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfilModal = ({ setProfil }) => {
  return (
    <div className="modal">
      <div className="modal-content-profil">
        {" "}
        <FontAwesomeIcon
          className="closebutton"
          icon="times"
          onClick={() => {
            setProfil(false);
          }}
        />
        <h2>Mon profil :</h2>{" "}
        <p>
          En reconversion Développeur Web. J'ai commencé par apprendre pour mes
          projets associatifs à "bidouiller" sur wordpress un peu de css/ Html.
          Même si être coordinatrice de projet en association avait du sens pour
          moi, j'ai petit à petit eu envie d'un métier plus technique. La
          formation Bootcamp au Réacteur m'a permis de comfirmer mon choix, ce
          que j'aime c'est coder ...
        </p>
      </div>
    </div>
  );
};

export default ProfilModal;
