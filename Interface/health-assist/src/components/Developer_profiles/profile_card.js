import React from 'react'
import anurag from '../images/20230906_112152.jpg'
import yash from '../images/VGA05324.jpeg'
import mayank from '../images/202309183303999867197156129~2.jpg'
import udisha from '../images/IMG_20231124_163245.jpg'
import './PCard_Css.css';

function profile_card() {
  return (
    <div className='team'>
        <h1 >Developer Team</h1>

    <div className="Profile">
        <div className="card" >  {/*style={{ width: '15rem' }}>*/}
            <img className="card-img" src= {anurag}  alt="Anurag Bhatt IMG"/>
            <div class="card-body">
                <h5 class="card-title">Anurag Bhatt</h5>
                <p class="card-text">Backend Development and management  of database using the Django framework</p>
            </div>
        </div>
        <div className="card" style={{ width: '15rem' }}>
            <img className="card-img" src= {yash}  alt="Yash Raj Saxena IMG"/>
            <div class="card-body">
                <h5 class="card-title">Yash Raj Saxena</h5>
                <p class="card-text">Full stack Development using React, Django and AI/ML model design Implementation </p>
            </div>
        </div>
        <div className="card" style={{ width: '15rem' }}>
            <img className="card-img" src= {mayank}  alt="Mayank Nandwani IMG"/>
            <div class="card-body">
                <h5 class="card-title">Mayank Nandwani </h5>
                <p class="card-text">Frontend  Development using React and UI Development </p>
            </div>
        </div>
        <div className="card" style={{ width: '15rem' }}>
            <img className="card-img" src= {udisha}  alt="Udisha Sahu IMG"/>
            <div class="card-body">
                <h5 class="card-title">Udisha Sahu</h5>
                <p class="card-text">Frontend  Development using React and content  Creation</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default profile_card