import React, { Component } from "react";
import { read_cookie } from 'sfcookies';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Bob from "./Bob";
import Kevin from "./Kevin";
import Jerry from "./Jerry";
import Phil from "./Phil";

 
class Main extends Component {

    constructor() {
        super();
        this.state={ user_name:"", user_email:"", user_cel:"" }
    };
    handleChange = event => {
        this.setState({ [event.target.name]:event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://i3v6zyppq8.execute-api.us-east-2.amazonaws.com/dev/email", {
            method: "POST",
            body: JSON.stringify({
                minions: read_cookie("minionsCookie"),
                user_name: this.state.user_name,
                user_email: this.state.user_email,
                user_cel: this.state.user_cel,
            })
        }).then( function (response) {
            if(response.ok){
                window.alert("Reserva efetuada com sucesso!!");
            } else {
                window.alert("Error ao efetuar a reserva");
                console.log(response);
            }
        })
    };

  render() {
    return (
        <HashRouter>
            <div>
                <h1><strong>Reserva de Minions</strong></h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/bob">Bob</NavLink></li>
                    <li><NavLink to="/jerry">Jerry</NavLink></li>
                    <li><NavLink to="/Kevin">Kevin</NavLink></li>
                    <li><NavLink to="/phil">Phil</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/bob" component={Bob}/>
                    <Route path="/jerry" component={Jerry}/>
                    <Route path="/kevin" component={Kevin}/>
                    <Route path="/phil" component={Phil}/>      
                    <div className="form-style">
                        <div className="form-style-heading">Fazer Reserva</div>
                        <form onSubmit={this.handleSubmit}>
                            <label for for="field1"><span>Nome :</span> <input className="input-field" name="user_name" type="text" placeholder="John Doe" onChange={this.handleChange} /> </label>
                            <label for="field2"><span>Email :</span> <input className="input-field"  name="user_email" type="email" placeholder="example@email.com" onChange={this.handleChange}  /> </label>
                            <label for="field3"><span>Cel :</span> <input className="input-field"  name="user_cel" type="text" placeholder="9999-8888" onChange={this.handleChange} /> </label>
                            <button>Enviar Reserva!</button>
                        </form>   
                    </div> 
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;