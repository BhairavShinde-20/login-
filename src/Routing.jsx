import React from 'react';
import { Routes,Route} from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import Login from './component/Login';
// import Uitask from './component/Uitask';


const Routing = () => {
    return (
        <>
            <Routes>
                <Route exact path ="/" element={<Login/>} /> 
                <Route exact path ="/login" element={<Login/>} />
                <Route exact path ="/dashboard" element={<Dashboard/>} />
                <Route exact path ="/register" element={<Register/>} />
                {/* /* <Route exact path ="/" element={<Uitask/>} /> */}

            </Routes>
        </>
    );
};

export default Routing;