import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Main extends React.Component {
    render() { 
        return (<div>
            <h1 className="heading">Are you a Doctor?</h1>
            <div className="doctorOuter">
                <Link to="/setup">
                    <button className="doctor">Add Working Hours</button>
                </Link>
            </div>
        </div>);
    }
}
 
export default Main;