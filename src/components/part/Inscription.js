import React from "react";
import { Button, Input } from "./Formulaire";

function Inscription({boolToggle}) {
  const clickCaseFilter = () => {
    boolToggle(false);
  }
  return (
    <>
      <form style={{ padding: "0px" }}>
        <div className="case_filter" onClick={clickCaseFilter}></div>
          <div className="case_connexion" style={{ paddingTop: "calc(var(--margin-vertical-case-insCon))"}}>
            <Input type={"email"} label={"Email / Pseudo"} />
            <Input type={"password"} label={"Mot de passe"} />
            <Input type={"password"} label={"Confirmer le mot de passe"} />
            <div className="grid_nom_prenom">
                <Input type={"text"} label={"Nom"} />
                <Input type={"text"} label={"Prénom"} />
            </div>
            <Input type={'text'} label={'Pseudo'}/>
            <Input type={'text'} label={'Lieu'}/>
            <Button type={"button"} value={"Inscrire"} />
          </div>
      </form>
    </>
  );
}

export default Inscription;
