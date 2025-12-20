import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="inner-footer">
                Train with real professionals <br /> Get the real results.
                <div className="people">
                    <img src="https://plus.unsplash.com/premium_photo-1762456150116-bd1679a52c5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" className='person'/>
                    <img src="https://plus.unsplash.com/premium_photo-1667512821673-953e0ac1423f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='person'/>
                    <img src="https://plus.unsplash.com/premium_photo-1763120205413-2b424644dc3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='person'/>
                </div>
            </div>
            <div className="socials">
                <p>Instagram<i className="ri-arrow-right-up-line"></i></p>
                <p>Facebook<i className="ri-arrow-right-up-line"></i></p>
                <p>Tik Tok<i className="ri-arrow-right-up-line"></i></p>
            </div>
        </footer>
    )
}

export default Footer
