import { useState } from 'react'
import Table from './components/DataTable'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Table></Table>
    </>
  )
}

export default App
