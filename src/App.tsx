import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import  { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";
import SidebarLeft from './pages/menu';


function App (props:any) {

   return (
    <div className="App">
      <SidebarLeft/>
      <div className="container-init"> 
        <h2>Olá</h2>
     <p> O que você precisa hoje?</p>
        </div>
    </div>
  );
}


const mapStateToProps = (state:any) => ({
  ...state
});

const mapDispatchToProps = (dispatch:any) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);