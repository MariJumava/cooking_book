import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-menu'>
            <Link to={'/'} className='navbar-main'>Main</Link>
            <Link to={'/resepies'} className='navbar-resepies'>Resepies</Link>
            <Link to={'/cookbook'} className='navbar-cookbook'>Cookbooks</Link>
            </div>
        </nav>
        </>
    )
}