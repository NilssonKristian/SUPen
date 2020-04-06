import 'react-native-gesture-handler';
import React from 'react'; 
import Navigator from './routes/drawer.js';

//-----------------------------------------------------------------------------------------------------------------------------------
// SAKER ATT FIXA I APPEN
//-----------------------------------------------------------------------------------------------------------------------------------

// När man är på settingsscreen och och trycker på hamburgermenyn och sedan homescreen 
// kommer man ett steg tillbaka till registerscreen och inte homescreen 

export default function App() {
  return (
    <Navigator />
    );
  }
   
