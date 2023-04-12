import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Switcher from './components/switcher';
import Title from './components/title';
import React from 'react';
import BoiCanh from './components/BoiCanh';
import Concept from './components/Concept';

function App() {
  const [state,setState] = React.useState(true);
  const handleOnClickChangeStatus =()=>{
      setState(!state);
  }
  return (
    <div className="App">
       <Header/>
       <Title/>
       <Switcher handleOnClickChangeStatus={handleOnClickChangeStatus}/>
       {
        state===true?
        <Concept/>
        :
        <BoiCanh/>
       }

    </div>
  );
}

export default App;
