import React, { Component } from "react";
import { bake_cookie} from 'sfcookies';
import JerryImg from "./imgs/Jerry.png";
 
class Jerry extends Component {
  render() {
    bake_cookie("minionsCookie","Jerry");
    return (
      <div>
        <img src={JerryImg} alt="Jerry" className="center" />
        <h2><strong><center>Jerry</center></strong></h2>
        <div className="alingleft">
          <p>Jerry gosta de gritar&#8230; &#8220;O QUEEEEEEEEEEE?&#8221;</p>
          <p><strong>Olhos:</strong> Possui dois olhos<br />
          <strong>Cabelo:</strong> Cabelos espetados<br />
          <strong>Corpo:</strong> Normal<br />
          <strong>Tamanho:</strong> Médio<br />
          <strong>Destaque:</strong> Melhor amigo do Stuart<br />
          </p>
        </div>
      </div>
    );
  }
}
 
export default Jerry;