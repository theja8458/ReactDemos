import './App.css'
import LudoBoard from './LudoBoard'
import TodoList from './TodoList'
import Lottery from './Lottery'
import Ticket from './Ticket'
function App() {
 

  return (
    <>
    <Lottery n={3} winningSum={15}/>
    </>
  )
}

export default App
