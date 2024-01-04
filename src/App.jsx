import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor';
import DisplayColor from './components/DisplayColor';

function App() {
  const [list, setList] = useState(new Values('red').all(10));

  console.log(list);

  return (
    <div className='App'>
      <FormColor setList={setList}/>
      <DisplayColor list={list}/>
    </div>
  )
}

export default App
