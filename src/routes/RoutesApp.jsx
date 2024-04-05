import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from '../themes/ThemeContext.jsx'
import Home from '../pages/Home.jsx'
import Profile from '../pages/Profile.jsx'
import MyJob from '../pages/MyJob.jsx'
import Button from '../components/Button.jsx';
import Header from '../components/Header.jsx';

function RoutesApp () {
  const { theme } = useTheme()
  return (
    <Router>
      <section className={`App ${theme}`}>
        <div className='content'>
          <Header>
            <Button />
          </Header>  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myjob' element={<MyJob />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
        </div>
      </section>
    </Router>
  
  )
} 

export default RoutesApp

