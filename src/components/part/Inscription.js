import React, { useState } from "react";
import { Button, Input } from "./Formulaire";
import Swal from "sweetalert2";

function Inscription({ boolToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [addresse, setAddresse] = useState("");
  const videFormul = () => {
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    setNom("");
    setPrenom("");
    setPseudo("");
    setAddresse("");
  };
  const clickCaseFilter = () => {
    videFormul();
    boolToggle(false);
  };
  const submitInscription = async () => {
    if (
      password === passwordConfirm &&
      password !== "" &&
      passwordConfirm !== ""
    ) {
      try {
        await fetch("http://localhost:5000/api/inscription", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            nom,
            prenom,
            pseudo,
            addresse,
          }),
        }).then((reponse) => {
          if (reponse.ok) {
            const Toast = Swal.mixin({
              target: ".toast_insc_con",
              customClass: {
                container: "pos_toast",
              },
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 4200,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });
            Toast.fire({
              title: `Merci ${email}, vous êtes maintenant inscrit`,
            });
            clickCaseFilter();  
            sessionStorage.setItem('session', 'ok');
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className="toast_insc_con"></div>
      <form style={{ padding: "0px" }}>
        <div className="case_filter" onClick={clickCaseFilter}></div>
        <div
          className="case_connexion"
          style={{ justifyContent: "flex-start" }}
        >
          <Input
            type={"mail"}
            label={"Email"}
            value={email}
            changeValue={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"password"}
            label={"Mot de passe"}
            value={password}
            changeValue={(e) => setPassword(e.target.value)}
          />
          <Input
            type={"password"}
            label={"Confirmer le mot de passe"}
            value={passwordConfirm}
            changeValue={(e) => setPasswordConfirm(e.target.value)}
          />
          <div className="grid_nom_prenom">
            <Input
              type={"text"}
              label={"Nom"}
              value={nom}
              changeValue={(e) => setNom(e.target.value)}
              style={{ width: "100%" }}
            />
            <Input
              type={"text"}
              label={"Prénom"}
              value={prenom}
              changeValue={(e) => setPrenom(e.target.value)}
              style={{ width: "100%" }}
            />
          </div>
          <Input
            type={"text"}
            label={"Pseudo"}
            value={pseudo}
            changeValue={(e) => setPseudo(e.target.value)}
          />
          <Input
            type={"text"}
            label={"Addresse"}
            value={addresse}
            changeValue={(e) => setAddresse(e.target.value)}
          />
          <Button
            type={"button"}
            onClick={submitInscription}
            value={"Inscrire"}
          />
        </div>
      </form>
    </>
  );
}

export default Inscription;
