import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component{
    render(){
        return(
            <div>
                <h1><Link to="/home">vacationMe</Link></h1>
                <h1><Link to="/profile">Profile</Link></h1>
                {/* <h1><Link to="/destinations">Destinations</Link></h1> */}
            </div>
        )
    }
}