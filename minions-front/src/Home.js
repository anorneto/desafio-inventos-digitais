import React, { Component } from "react";
import { bake_cookie} from 'sfcookies';
import MinionsImg from "./imgs/Minions.jpg";
 
class Home extends Component {
  render() {
    bake_cookie("minionsCookie","Todos");
    return (
        <div>
        <img src= {MinionsImg} alt= "minions" className="centerHome" />
        <h1><strong><center>Bem vindo!</center></strong></h1>
        <center>Escolha um Minion na barra superior para fazer sua reserva ou preencha os dados abaixo para reservar todos!</center>

      </div>
    );
  }
}
 
export default Home;