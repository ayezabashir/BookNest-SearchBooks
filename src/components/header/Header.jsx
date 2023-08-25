import './header.scss';
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';

const Header = () => {
    return (
        <div className='container'>
            <header className='header'>
                <Navbar />
                <div className="header-content">
                    <h2>Find Your Next Read</h2>
                    <p>Explore, Discover, Immerse. Embark on a Literary Expedition with Our Comprehensive Book Search Platform, Where Every Page Turn Reveals New Horizons of Imagination, Knowledge, and Emotion, All at Your Fingertips.</p>
                    <Search />
                </div>
            </header>
        </div>
    )
}

export default Header
