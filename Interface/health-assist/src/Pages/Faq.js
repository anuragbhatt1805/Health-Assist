import React from 'react'
import Faqa from '../components/FAQ/FaqSimple'
import DevProfile from '../components/Developer_profiles/profile_card'
import FeedBack from '../components/FAQ/FeedbackForm'


function Faq(){
  return (
    <div>
        
       <Faqa/>
       <FeedBack/>
        <DevProfile/>
        
        
    </div>
  )
}

export default Faq