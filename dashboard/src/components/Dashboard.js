import { Routes, Route } from 'react-router-dom';

import Apps from './Apps';
import Funds from './Funds';
import Holdings from './Holdings';
import Orders from './Orders';
import Positions from './Positions';
import Summary from './Summary';
import Watchlisting from './Watchlisting';

import { GeneralContextProvider } from './GeneralContext';

function Dashboard() {

    return (
        <div className='dashboard-container'>
            <GeneralContextProvider>
                <Watchlisting />
            </GeneralContextProvider>
            <div className='content'>
                {/* Nested routing to content to be change */}
                <Routes>
                    <Route exact path='/' element={<Summary />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/holdings' element={<Holdings />} />
                    <Route path='/positions' element={<Positions />} />
                    <Route path='/funds' element={<Funds />} />
                    <Route path='/apps' element={<Apps />} />
                </Routes>
            </div>
        </div>
    );
}

export default Dashboard;