import React, { useContext } from 'react';
import Authproviders, { AuthContext } from '../providers/Authproviders';

const Home = () => {
    const user = useContext(AuthContext);
    return (
        <div>
            this is home  {user.displayName}
        </div>
    );
};

export default Home;