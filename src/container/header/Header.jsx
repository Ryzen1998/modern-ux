import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing together with C# , Javascript
        </h1>
        <p>It is a long established fact that a reader will be distracted by the 
          readable content of a page when looking at its layout. The point of using Lorem
           Ipsum is that it has a more-or-less normal distribution of letters, as opposed 
           to using 'Content here, content here', making it look like readable English.
           </p>
        <div className="gpt3__header-content__input">
          <input type='email' placeholder='your email'/>
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt='people'/>
          <p>100+ students currently enrolled</p>
        </div>
        
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt='ai'/>
        </div>

    </div>
  )
}

export default Header