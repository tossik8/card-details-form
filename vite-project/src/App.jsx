import { useState } from 'react'
import './App.css'
import Content from './components/Content';

import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar/>
      <Content/>
    </div>
  )
}

export default App
