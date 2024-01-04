import { useState } from 'react'
import Values from 'values.js'
import './App.css'
import FormColor from './components/FormColor';

function App() {
  const [list, setList] = useState(new Values('red').all(10));

  console.log(list);

  return (
    <div className='App'>
      {/* <h2>Test Component</h2> */}
      <FormColor setList={setList}/>
    </div>
  )
}

export default App
