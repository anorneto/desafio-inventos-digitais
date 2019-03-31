import React, { Component } from "react";
import { bake_cookie} from 'sfcookies';
import PhilImg from "./imgs/Phil.png"; 

class Phil extends Component {
  render() {
    bake_cookie("minionsCookie","Phil");
    return (
      <div>
        <img src={PhilImg} alt="Phil" className="center" />
        <h2><strong><center>Phil</center></strong></h2>
        <div className="alingleft">
            <p>É o personagem mais responsável de todos, ele vai liderar a busca por um vilão</p>
            <p><strong>Olhos:</strong> Possui um olho<br />
            <strong>Cabelo:</strong> Uma pequena moita de cabelo<br />
            <strong>Corpo:</strong> Normal<br />
            <strong>Tamanho:</strong> Médio<br />
            <strong>Destaque:</strong> É o mais engraçado, ri de qualquer coisa<br />
            </p>
        </div>
      </div>
    );
  }
}
 
export default Phil;