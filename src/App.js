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
import SignUp from './SignUp';

import Controls from './Controls';
import Fnf from './Fnf';

import Posts from './Posts';


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
              <Route path="/admin" element={<Users />} />
              <Route path="posts/:userId" element={<Posts  />}/>
              <Route path="/evidence" element={<Evidence />} />
              <Route path="/admin/new-user" element={<SignUp />}/>
              <Route path="/controls" element={<Controls />} />
              <Route path="*" element={<Fnf />} />
            </Routes>
          </main>
        {/* </header> */}
        
      </div>
  );
}

export default App;

