

import Dashboard from './Dashboard';
import Topbar from './Topbar';
// import { Password } from "@mui/icons-material";

import Auth from '../components/Auth';

function Home() {
    return (
        <>
            <Auth />
        </>
    )

    return (
        <>
            <Topbar />
            <Dashboard />
        </>
    );
}

export default Home;