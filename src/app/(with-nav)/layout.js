import Link from "next/link";
import '../../styles/WithNavPages.css'

export default function WithNavLayout({ children }) {
  return (
    <>
      <nav className='nav'>
        <h3 className="nav-h3">SocialImg</h3>
        <ul className="nav-ul">
          <Link className="ul-link"href='/'>Home</Link>
        </ul>
        <ul className="nav-ul">
          <Link className="ul-link"href='/login'>Login</Link>
          <Link className="ul-link"href='/register'>Register</Link>
          <Link className="ul-link"href='/profile'>Avatar</Link>
        </ul>
      </nav>
      {children}
    </>
  );
}
