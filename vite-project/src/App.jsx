import { useState } from 'react'
import './App.css'
import Attribution from './components/Attribution';
import Card from './components/Card';
import Confirmation from './components/Confirmation';
import Form from './components/Form';
import frontCard from "./assets/images/bg-card-front.png";
import backCard from "./assets/images/bg-card-back.png";

function App() {

  return (
    <div className="App">
      <main>
            <div className="cards">
                <Card src={frontCard} type="front" description="Front side of a credit card."/>
                <Card src={backCard} type="back" description="Back side of a credit card."/>
            </div>
            <div className="content">
                <Form/>
                {/*<Confirmation/>*/}
                <Attribution/>
            </div>

        </main>
    </div>
  )
}

export default App
