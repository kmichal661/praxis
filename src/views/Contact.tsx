import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faLocationDot, faPhoneFlip, faEnvelope, faHouseChimney } from '@fortawesome/free-solid-svg-icons'

function Contact(){
    return(
        <div className='contact'>
                <span>
                    <FontAwesomeIcon icon={faHouseChimney} className="contactIcon" /><br/>
                    <h3>Vist Us</h3>
                    <p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry.</p>
                    <h4>Adalbert-Stifter Straße 7, 38239 Salzgitter</h4>
                </span>
                <span>
                <FontAwesomeIcon icon={faPhoneFlip} className="contactIcon" /><br/>
                    <h3>Call Us</h3>
                    <p>Lorem Ipsum has been the industry's<br/> standard dummy text</p>
                    <h4>0 53 41 / 40 222 44</h4>
                </span>
                <span>
                <FontAwesomeIcon icon={faEnvelope} className="contactIcon" /><br/>
                    <h3>Message Us</h3>
                    <p>but also the leap into<br/> electronic typesetting,</p>
                    <h4>physiotherapieKasia@zajebistyPraxis.de</h4>
                </span>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15286.895642958702!2d19.011807678117442!3d50.26028555387979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716cf9525eee09b%3A0xdcef438ad9aa113a!2sRynek%20w%20Katowicach!5e0!3m2!1spl!2spl!4v1651394810218!5m2!1spl!2spl" style={{border: 0, width: '100vw', height: 'auto'}} />
                

        </div>
    )
}

export default Contact