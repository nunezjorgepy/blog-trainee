import { Route, Routes } from 'react-router'
import './App.css'
import { UserContextProvider } from './Context/userContext'
import UserPage from './pages/UserPage/UserPage'
import HomePage from './pages/HomePage/HomePage'
import ArticlePage from './pages/Article/ArticlePage'
import CreateArticlePage from './pages/CreateArticle/CreateArticlePage'
import ConfigPage from './pages/Config/ConfigPage'

function App() {

  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/user' element={<UserPage />}/>
          <Route path='/article' element={<ArticlePage />} />
          <Route path='/createArticle' element={<CreateArticlePage />} />
          <Route path='/config' element={<ConfigPage />} />
        </Routes>
      </UserContextProvider>
    </>
  )
}

export default App
