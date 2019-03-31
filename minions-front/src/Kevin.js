import React, { Component } from "react";
import { bake_cookie} from 'sfcookies';
import KevinImg from "./imgs/Kevin.png" 
 
class Kevin extends Component {
  render() {
    bake_cookie("minionsCookie","Kevin");
    return (
      <div>
        <img src={KevinImg} alt="Kevin" className="center" />
        <h2><strong><center>Kevin</center></strong></h2>
        <div className="alingleft">
          <p>É o personagem mais responsável de todos, ele vai liderar a busca por um vilão</p>
          <p><strong>Olhos:</strong> Possui dois olhos<br />
          <strong>Cabelo:</strong> Uma pequena moita de cabelo<br />
          <strong>Corpo:</strong> Magro<br />
          <strong>Tamanho:</strong> Alto<br />
          <strong>Destaque:</strong> É um lider</p>
          <p>Provavelmente Kevin seja um parente do passado de Tim (um dos Minions principais de Meu Malvado Favorito), ambos são iguais em tudo. É o único minion com temperamento e personalidade.</p>
          <p></p>
        </div>
      </div>
    );
  }
}
 
export default Kevin;