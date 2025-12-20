import React from 'react'

const CarouselOne = () => {
  return (
    <div className='carousel'>
      <div className="box one">
        <h1><i className="ri-basketball-fill"></i></h1>
        <p>Professional hard courts <span>with tournament-grade lightning and climate control -- play in </span>perfect conditions, in any season.</p>
        <div className="game-mode">
            <div className="botton">
                <div className="round"></div>
            </div>
            Game Mode
        </div>
      </div>
      <div className="box two">
        <div className="people">
            Private and Group Lessons
        </div>
      </div>
      <div className="box third">
        <div className="upper">
            <h1>100+</h1>
            <h6>Pro Coaches</h6>
            <span>Certified professionals ready to boost your game form first serve to tournament level.</span>
        </div>
        <div className="lower">
            <div className="names">
                <h6>Beginner</h6>
                <h6>Intermediate</h6>
                <h6>Advanced</h6>
            </div>
            <div className="statistics">
                <div className="stats">
                    
                    <div className="tray">
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                    </div>
                    <h6>55</h6>
                </div>
                <div className="stats">
                    
                    <div className="tray">
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                    </div>
                    <h6>40</h6>
                </div>
                <div className="stats">
                    <div className="tray">
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                        <div className="ball"></div>
                    </div>
                    <h6>35</h6>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselOne
