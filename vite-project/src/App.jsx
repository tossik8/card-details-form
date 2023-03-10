import { useState } from 'react'
import './App.css'
import Attribution from './components/Attribution';
import Card from './components/Card';
import Confirmation from './components/Confirmation';
import Form from './components/Form';
import frontCard from "./assets/images/bg-card-front.png";
import backCard from "./assets/images/bg-card-back.png";
import { useSelector } from 'react-redux';

function App() {

  const isForm = useSelector(state => state.formReducer.isForm);
  return (
    <div className="App">
      <main>
            <div className="cards">
                <Card src={frontCard} type="front" description="Front side of a credit card."/>
                <Card src={backCard} type="back" description="Back side of a credit card."/>
            </div>
            <div className="content">
                {isForm? <Form/>: <Confirmation/>}
                <Attribution/>
            </div>

        </main>
    </div>
  )
}

export default App
