import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Registration from './pages/Registration'
import Main from './pages/Main'
import Login from './pages/Login'
import RegisterPet from './pages/RegisterPet'
import Sidebar from './components/SideBar'
import Profile from './pages/Profile'
import Likes from './pages/Likes'
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <ScrollToTop />
        <Sidebar />
        {/* <Header /> */}
        <Routes>
          <Route path='/match' element={<Main />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registerPet' element={<RegisterPet />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/likes' element={<Likes />} />
          <Route path='/messages' element={<Profile />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
