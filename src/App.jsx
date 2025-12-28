import './App.css'
import { UserContextProvider } from './Context/userContext'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <UserContextProvider>
        <HomePage />
      </UserContextProvider>
    </>
  )
}

export default App
