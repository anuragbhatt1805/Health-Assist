import React from 'react'
import imgr1 from '../components/images/reviewer1.jpg'
import imgr2 from '../components/images/reviewer2.jpg'
import imgr3 from '../components/images/reviewer3.jpg'
import imgr4 from '../components/images/reviewer4.jpg'
import imgr5 from '../components/images/reviewer5.jpg'
import './Home/Home.css'


function Card() {
  return (
    <div className='row'> 
    <div className="col-md-4 mb-4 p-5">
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src={imgr1} alt="Card image cap" className='reviewer'/>
            <div class="card-body">
                <h5 class="card-title">Jai Singh</h5>
                <p class="card-text">"Helps me lots with my health!"*
   - This Health Assist thing is good for my health. It's easy to sign up, and I only have to say what's wrong when I go back. The computer suggestions are good and help me find the right doctors fast.</p>
                <a href="#" className="btn btn-primary ratings">4.2  ⭐</a>
            </div>
            </div>
    </div>
     <div className="col-md-4 mb-4 p-5">
     <div class="card" style={{ width: '18rem' }}>
         <img class="card-img-top" src={imgr2} alt="Card image cap" className='reviewer'/>
         <div class="card-body">
             <h5 class="card-title">Mamta Goyal</h5>
             <p class="card-text">"Feels like my own doctor helper!"*
   - Using Health Assist feels like having my own health helper. The screen shows how I'm doing, and doctors work together for my treatment. The easy screen makes it good for me.</p>
             <a href="#" className="btn btn-primary ratings">4.6  ⭐</a>
         </div>
         </div>
 </div>
  <div className="col-md-4 mb-4 p-5">
  <div class="card" style={{ width: '18rem' }}>
      <img class="card-img-top" src={imgr3} alt="Card image cap" className='reviewer'/>
      <div class="card-body">
          <h5 class="card-title">Adil Ayaan</h5>
          <p class="card-text">"Big change for me and my health!"*
   - I have a long-time sickness, and Health Assist helps me a lot. The computer looks at my information and suggests doctors just for me. It keeps all my health information, which is nice. It's a good way to take care of health.</p>
          <a href="#" className="btn btn-primary ratings">5  ⭐</a>
      </div>
      </div>
</div>
<div className="col-md-4 mb-4 p-5">
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src={imgr4} alt="Card image cap" className='reviewer'/>
            <div class="card-body">
                <h5 class="card-title">Gauri Mishra</h5>
                <p class="card-text">"Keeping my history safe and good!"*
   - The saving thing in Health Assist makes me feel safe. I know all my health history is saved for later. It's good for me and helps doctors learn more. It's a really good app for people.</p>
                <a href="#" className="btn btn-primary ratings">4.5  ⭐</a>
            </div>
            </div>
    </div>
    <div className="col-md-4 mb-4 p-5">
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src={imgr5} alt="Card image cap" className='reviewer'/>
            <div class="card-body">
                <h5 class="card-title">Krish Pandit</h5>
                <p class="card-text">"Gives me power with info!"*
   - Health Assist gives me power to find information easily. I can say how I'm doing when I see the doctor. I feel like I'm part of deciding about my health.</p>
                <a href="#" className="btn btn-primary ratings">4  ⭐</a>
            </div>
            </div>
    </div>
</div>
  )
}

export default Card