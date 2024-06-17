import React, { useState } from "react";

const Modal = () => {
  const [opened, setOpened] = useState(true);

  return (
    <React.Fragment>
      <div class="modal" style={opened === false ? { display: "none" } : {}}>
        <div class="modal-content">
          <div class="modal-btn">
            <button
              id="close-modal"
              onClick={() => {
                setOpened(false);
              }}
            >
              fermer
            </button>
          </div>
          <div class="tech-infos">
            <h2>Pour cette réalisation, j'ai utilisé :</h2>
            <ul>
              <li>html5</li>
              <li>css3</li>
              <li>sass</li>
              <li>figma</li>
              <li>React</li>
              <li>React-router-dom</li>
              <li>la sémantique</li>
              <li>responsive design</li>
              <li>modèle des boites pour le code CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
