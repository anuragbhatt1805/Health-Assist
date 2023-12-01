import React from 'react'

function Card() {
  return (
    <div className='row'> 
    <div className="col-md-4 mb-4 p-5">
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">"Helps me lots with my health!"*
   - This Health Assist thing is good for my health. It's easy to sign up, and I only have to say what's wrong when I go back. The computer suggestions are good and help me find the right doctors fast.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
    </div>
     <div className="col-md-4 mb-4 p-5">
     <div class="card" style={{ width: '18rem' }}>
         <img class="card-img-top" src="..." alt="Card image cap"/>
         <div class="card-body">
             <h5 class="card-title">Card title</h5>
             <p class="card-text">"Feels like my own doctor helper!"*
   - Using Health Assist feels like having my own health helper. The screen shows how I'm doing, and doctors work together for my treatment. The easy screen makes it good for me.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
         </div>
         </div>
 </div>
  <div className="col-md-4 mb-4 p-5">
  <div class="card" style={{ width: '18rem' }}>
      <img class="card-img-top" src="..." alt="Card image cap"/>
      <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">"Big change for me and my health!"*
   - I have a long-time sickness, and Health Assist helps me a lot. The computer looks at my information and suggests doctors just for me. It keeps all my health information, which is nice. It's a good way to take care of health.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
</div>
<div className="col-md-4 mb-4 p-5">
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">"Keeping my history safe and good!"*
   - The saving thing in Health Assist makes me feel safe. I know all my health history is saved for later. It's good for me and helps doctors learn more. It's a really good app for people.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
    </div>
    <div className="col-md-4 mb-4 p-5">
        <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">"Gives me power with info!"*
   - Health Assist gives me power to find information easily. I can say how I'm doing when I see the doctor. I feel like I'm part of deciding about my health.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
    </div>
</div>
  )
}

export default Card