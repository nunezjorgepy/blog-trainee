import { Route, Routes } from 'react-router'
import './App.css'
import { UserContextProvider } from './Context/userContext'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage/UserPage'

function App() {

  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user' element={<UserPage />}/>
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
