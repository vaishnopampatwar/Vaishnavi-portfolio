import React from 'react'
import './Header.css'

function AboutMy() {
    return (
        <div id="aboutmy" className="aboutmy" >
            <div class="pos d-none d-lg-block">About Me</div>
            <div className="aboutmy-l">
                <h1>About Myself</h1>
                <p>Hello, my name is Vaishnavi Ram Pampatwar. I am pursuing a B-TECH degree in Computer Science and Engineering at Walchand College of Engineering, Sangli, Maharashtra, India. Experienced MS-CIT Controller with a demonstrated history of working in the computer software industry at Sumitra InfoTech private limited Nanded. Skilled in C, C++, Java, Python (Programming Language), MERN Stack and Android Developer.
                    My Hobbies are Reading, Listening to music and Travelling. I like to explore and share knowledge. Believe in helping. Willing to innovate stuff that will help mankind.</p>
            </div>
            <div className="aboutmy-r">
                <div className="aboutmy-rin">
                <img className="img" src="img/m.png"></img>
                <img className="img1" src="img/patch.png"></img>
                </div>
                </div>
        </div>
    )
}

export default AboutMy
