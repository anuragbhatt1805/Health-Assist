import React from 'react'
import Home1 from '../components/Home/Home'
import NavBar from '../components/navb/NavBar'
import Card from '../components/Card'


function Home() {
  return (
    <div>
        <NavBar/>
        <Home1/>
        <h1>Review</h1>
        <div className="row">
            <Card/>
            <Card/>
            <Card/>
        </div>
        
    </div>
  )
}

export default Home