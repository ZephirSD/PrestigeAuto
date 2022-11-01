import React, { useState } from "react";
import { Button, Input } from "./Formulaire";
import Swal from "sweetalert2";

function Connexion({ boolToggle }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clickCaseFilter = () => {
    setEmail("");
    setPassword("");
    boolToggle(false);
  };
  const submitConnexion = async () => {
    try {
      await fetch("http://localhost:5000/api/connexion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      }).then((response) => {
        if (response.status === 200) {
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
            title: `Merci ${email}, vous êtes connecté`,
          });
          clickCaseFilter();  
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="toast_insc_con"></div>
      <form style={{ padding: "0px" }}>
        <div className="case_filter" onClick={clickCaseFilter}></div>
        <div className="case_connexion">
          <Input
            type={"email"}
            label={"Email / Pseudo"}
            value={email}
            changeValue={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"password"}
            label={"Mot de passe"}
            value={password}
            changeValue={(e) => setPassword(e.target.value)}
          />
          <Button type={"button"} value={"Connecter"} onClick={submitConnexion} />
        </div>
      </form>
    </>
  );
}

export default Connexion;
