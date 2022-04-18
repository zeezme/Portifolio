import React, { useState } from "react";
import "./menubutton.scss";

export default function Menubutton() {
  const [isOpen, setNavbarState] = useState("false");
  const line1 = "line1";
  const line2 = "line2";
  const line3 = "line3";
  const line1_Open = "line1_Open";
  const line2_Open = "line2_Open";
  const line3_Open = "line3_Open";

  return (
    <div className="hamburgerContainer" onClick={() => { setNavbarState(!isOpen) }}>
      <div className={isOpen ? line1 : line1_Open}>voltar</div>
      <div className={isOpen ? line2 : line2_Open}></div>
      <div className={isOpen ? line3 : line3_Open}></div>
    </div>
  );
}
