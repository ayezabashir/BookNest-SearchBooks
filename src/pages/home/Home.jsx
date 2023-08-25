import Header from '../../components/header/Header';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}

export default Home
