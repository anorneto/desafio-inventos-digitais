import React, { Component } from "react";
import { bake_cookie} from 'sfcookies';
import BobImg from "./imgs/Bob.png";
 
class Bob extends Component {
  render() {
    bake_cookie("minionsCookie","Bob");
    return (
      <div>
        <img src= {BobImg} alt= "Bob" className="center" />
        <h2><strong><center>Bob</center></strong></h2>
        <div className="alingleft">
          <p> Bob é o Minion mais infantil de todos.</p>
          <p><strong>Olhos:</strong> Dois olhos, um olho verde e outro castanho<br />
          <strong>Cabelo:</strong> Não possui cabelo<br />
          <strong>Corpo:</strong> Gordinho<br />
          <strong>Tamanho:</strong> Baixo (menor minion)<br />
          <strong>Destaque:</strong> Possui um bichinho de pelúcia</p>
          <p> Bob possui heterocromia ocular, por isso um olho verde e outro castanho. Pelas suas atitudes nos trailer podemos perceber que ele é muito divertido e até histórias de terror não lhe assustam.<br /></p>
        </div>
      </div>
    );
  }
}
 
export default Bob;