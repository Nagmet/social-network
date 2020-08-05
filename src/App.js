import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from "./componets/Profile/Profile";




// ctrl + alt + l отформатировать код


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
};


export default App;