import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import Profile from './componets/Profile';



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