import logo from './logo.svg';
import './App.css';
import * as React from "react";
import * as Mui from "@mui/material";
import MediaCard from './Components/Card';
import ButtonAppBar from "./Components/AppBar";
import { Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import Users from './Users';
import Evidence from './Evidence';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <ButtonAppBar className="Controlcognizant" />
        </header>
          <main>
            {/* <Mui.Grid container spacing={3} paddingLeft={25}>
              <Mui.Grid item xs={12} sm={6} md={4}>
                <MediaCard className="" src={require('./Imgs/download.png')} description=""/>
              </Mui.Grid>
              <Mui.Grid item xs={12} sm={6} md={4}>
                <MediaCard className="" src={require('./Imgs/download.png')} description=""/>
              </Mui.Grid>
              <Mui.Grid item xs={12} sm={6} md={4}>
                <MediaCard className="" src={require('./Imgs/download.png')} description=""/>
              </Mui.Grid>
              <Mui.Grid item xs={12} sm={6} md={4}>
                <MediaCard className="" src={require('./Imgs/download.png')} description=""/>
              </Mui.Grid>
            </Mui.Grid> */}
            <Routes>
              <Route path="/login" element={<SignIn />} />
              <Route path="/" element={<></>} />
              <Route path="/users" element={<Users />} />
              <Route path="/evidence" element={<Evidence />} />
            </Routes>
          </main>
        {/* </header> */}
        
      </div>
  );
}

export default App;

