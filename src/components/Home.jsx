import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'

function Home(props){
    
        return (
            <div>
            {props.loggedInStatus ? <Navbar  /> : <Dashboard  />}
            </div>
        )
    }


export default Home