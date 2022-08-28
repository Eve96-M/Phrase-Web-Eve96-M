import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'

function App() {
    const colorArray = ["#845ec2", "#d65db1", "#ff6f91", "#ff9671", "#ffc75f", "#00c9a7", "#00d2fc","#6271c6", "#9eda9b", "#fb9758"]
  return (
    <div className="App">
      <QuoteBox Colors={colorArray}/>
    </div>
  )
}

export default App
