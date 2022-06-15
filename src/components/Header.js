import React from 'react'
import './Header.css'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import NavBar from './Navbar';

function Header() {
    return (
    <>
        <div className="header">
        <NavBar/>
        </div>
        <div class="outline_text d-none d-lg-block">Portfolio</div>
        <div className="abt" data-aos="fade-up" data-aos-duration="2000">
            <div><img className="myimg" src="img/homeme.jpeg"></img></div>
            <div className="abt-in">
                <h3>HELLO EVERYBODY, I AM</h3>
                <h1>Vaishnavi<br/> Pampatwar</h1>
                <h4><p>Developer &#9830; Innovator &#9830; Learner</p></h4>
                <h5>I'm a Programmer and Full stack Web Developer currently living in India. I enjoy building everything from small to rich interactive web apps</h5>
                {/* <h5>I'm a Programmer and Full stack <br/>Web Developer currently living in Nanded.<br/> I enjoy building everything from small <br/>to rich interactive web apps</h5> */}
                {/*  */}
                <div className="head-in">
                    <p><PhoneIcon/>9175196607</p>
                    <p><EmailIcon/>vaishnavipampatwar77@gmail.com</p>
                    <p><HomeIcon/>India</p>
                </div>
            </div>
        </div>
    </>
    )
}

export default Header
