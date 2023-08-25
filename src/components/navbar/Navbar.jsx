import { Link } from "react-router-dom"
import { useState } from "react"
import book from '/book.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillHome, AiFillQuestionCircle } from 'react-icons/ai'

const Navbar = () => {
    const [menu, setMenu] = useState(true);
    const handleMenu = () => {
        setMenu(!menu);
    }
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="toggle-menu">
                    <Link to='/' className="logo">
                        <img src={book} alt="logo" />
                        <span className="fw-7">BookNest</span>
                    </Link>
                    <ul className="nav-item-lg">
                        <li className="nav-item">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='about'>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="md-nav">
                    <button type="button" onClick={handleMenu} className="btn-toggle">
                        <GiHamburgerMenu className="icon" />
                    </button>
                    <div className={menu ? "show-navbar" : "hide-navbar"}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/'>
                                    <AiFillHome className='icon' />
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='about'>
                                    <AiFillQuestionCircle className='icon' />
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
