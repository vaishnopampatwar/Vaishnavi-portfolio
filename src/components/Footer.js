import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
    return (
    <>
        <div id="contact" className="footer" >
            <div class="lets" data-aos="zoom-in">
                <h1>Let's Connect</h1>
                <div class="cta">
                    Get in Touch
                </div>
                <p>vaishnavipampatwar77@gmail.com</p>
            </div>
            <div class="link" data-aos="zoom-in">
                <p><InstagramIcon/><a href="https://www.instagram.com/vaishno_rp/">Instagram</a></p>
                <p><LinkedInIcon/><a href="https://www.linkedin.com/in/vaishnavi-pampatwar-0519461aa/">Linkedin</a></p>
                <p><TwitterIcon/><a href="https://twitter.com/VaishnaviPampa3">Twitter</a></p>
                <p><GitHubIcon /><a href="https://github.com/vaishnopampatwar">Github</a></p>
            </div>
        </div>
        <div class="footer-b">
        <p>&#169; Vaishnavi Pampatwar, 2021 . All rights reserved</p>
    </div>
    </>
    )
}

export default Footer
