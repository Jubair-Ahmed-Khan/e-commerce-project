import Link from 'next/link'

const NavBar = () => {

    return (
        <nav className='bg-blue-900'>
            <div className="c-container-large nav-wrapper">
                <Link href="/" className="brand-logo left">REPLIQ</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Cart</Link></li>
                    <li><Link href="/">Login</Link></li>
                    <li><Link href="/">Signup</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;