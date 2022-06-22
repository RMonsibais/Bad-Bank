import React from 'react'
import { Link } from 'react-router-dom';
import Bankimage from '../img/badbank.png';

const Home = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={Bankimage} alt="bad bank" />
            <div className="card-body">
                <h5 className="card-title">John Dillinger Bank</h5>
                <p className="card-text">You can trust us!</p>
                <h6>Click below to begin:</h6>
                <Link to="/CreateAccount" className="btn btn-primary">Create An Account</Link>
            </div>
        </div>
    );
};

export default Home