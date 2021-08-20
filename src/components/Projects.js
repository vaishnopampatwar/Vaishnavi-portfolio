import React from 'react'
import { Button } from 'react-bootstrap'
import CardTemp from './CardTemp'
import Carousel from './Carousel'


function Projects() {
    return (
        <div id="projects" className="proj-out" data-aos="fade-right">
            <div className="proj_top"><h1>My Projects</h1>
                <div class="pos1 d-none d-lg-block">Projects</div>
            </div>
            <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
                <Carousel show={2}>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="img/bank.png"  alt="placeholder" style={{ width: '98%' }} />
                            <h2  style={{marginTop: 23 , fontSize : 45 }}>Bank Management Website</h2>
                            <h5 >This is a Dynamic Website in which we can create new users, Make transactions, and many more. I used PhpMyAdmin Database with responsive Layouts<br/><br/><br/></h5>
                            <Button href="https://github.com/vaishnopampatwar/VRP_Bank" className="btn">Explore More</Button>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="img/gita.png" alt="placeholder" style={{ width: '100%' }} />
                            <h2 style={{marginTop: 23 , fontSize : 45 }}>VOZDEINSIDE Website</h2>
                            <h5>In this website, I used the MERN stack. This website is All about Holy Bhagavad Gita. We can explore Shlokas of Gita According to our Emotion or mood.<br/><br/><br/></h5>
                            <Button href="https://github.com/vaishnopampatwar" className="btn">Explore More</Button>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="img/payment.png" alt="placeholder" style={{ width: '100%' }} />
                            <h2 style={{marginTop: 23 , fontSize : 45 }}>Charity Website</h2>
                            <h5>Payment Gateway Integration using Razorpay
                                This is the project which shows how to integrate payments into the website. Here Razorpay is used as a test mode API button used in the website for providing various kinds of payment options. The website provides an easy way of accepting donations from people.</h5>
                            <Button href="https://github.com/vaishnopampatwar/DonationSite" className="btn">Explore More</Button>
                        </div>
                    </div>

                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="img/hms.png" alt="placeholder" style={{ width: '100%' }} />
                            <h2 style={{marginTop: 23 , fontSize : 45 }}>Hospital Management Project</h2>
                            <h5>The project HMS is based on the database, object oriented . This project uses java as a front end software which is an object oriented programming and has connectivity with MS Access Database.<br/><br/></h5>
                            <Button href="https://github.com/vaishnopampatwar/Hospital-Management" className="btn">Explore More</Button>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="img/ui_chat.png" alt="placeholder" style={{ width: '100%' }} />
                            <h2 style={{marginTop: 23 , fontSize : 45 }}>Chatting Application</h2>
                            <h5>This Chatting Application is written in Java with the help of AWT and NET package. This chatting will end when someone of says Bye. Enjoy Chatting!!!<br/><br/><br/></h5>
                            <Button href="https://github.com/vaishnopampatwar" className="btn">Explore More</Button>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img src="img/bot_proj.png" alt="placeholder" style={{ width: '110%' }} />
                            <h2 style={{marginTop: 23 , fontSize : 45 }}>Chat Bot Application</h2>
                            <h5>Chatbots with Dialogflow
                                created a great conversational experience for users<br/><br/><br/><br/><br/></h5>
                            <Button href="https://github.com/vaishnopampatwar" className="btn">Explore More</Button>
                        </div>
                    </div>
                    <div>
                        <div style={{ padding: 8 }}>
                            <img className="and_img" src="img/and_proj.png" alt="placeholder" style={{ width: '33%' }} />
                            <h2 style={{marginTop: 23 , fontSize : 45 }}>Converter Application</h2>
                            <h5>Converter Application which accurately convert temperature or currency or weight<br/><br/><br/><br/></h5>
                            <Button href="https://github.com/vaishnopampatwar" className="btn">Explore More</Button>
                        </div>
                    </div>



                </Carousel>
            </div>
            <div className="proj_bot"></div>
        </div>
    )
}

export default Projects
