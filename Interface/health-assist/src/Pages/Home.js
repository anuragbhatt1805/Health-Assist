import React from 'react'
import Home1 from '../components/Home/Home'
// import NavBar from '../components/navb/NavBar'
import Card from '../components/Card'


function Home() {
  return (
    <div>
        <Home1/>
        <h1 className='pt5'>Review</h1>
        <div className="row">
            <Card/>
            
        </div>
        
    </div>
  )
}

export default Home