import { Route, Routes } from 'react-router'
import './App.css'
import { UserContextProvider } from './Context/userContext'
import UserPage from './pages/UserPage/UserPage'
import HomePage from './pages/HomePage/HomePage'
import ArticlePage from './pages/Article/ArticlePage'
import CreateArticlePage from './pages/CreateArticle/CreateArticlePage'
import ConfigPage from './pages/Config/ConfigPage'
import { ArticleContextProvider } from './Context/articleContext'

function App() {

  return (
    <>
      <UserContextProvider>
        <ArticleContextProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/user/:username' element={<UserPage />}/>
            <Route path='/article' element={<ArticlePage />} />
            <Route path='/createArticle' element={<CreateArticlePage />} />
            <Route path='/config' element={<ConfigPage />} />
          </Routes>
        </ArticleContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App
