import { Link } from 'react-router-dom';
function Header ({children}) {
  return (
    <header>
        { children }
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/myjob">MyJob</Link>
        </nav>
      </header>
  )

}

export default Header