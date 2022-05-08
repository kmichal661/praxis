import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneFlip, faEnvelope, faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import LogoSafin from '../logo saphin.ai.svg'

function Contact(){
    return(

        <div>
            <div className="contactLogo">
                <img src={LogoSafin} />
            </div>
        
        <div className='contact'>
            

                <span>
                    <FontAwesomeIcon icon={faHouseChimney} className="contactIcon" /><br/>
                    <h3>Vist Us</h3>
                    <p>Lorem Ipsum is simply dummy text of the<br/> printing and typesetting industry.</p>
                    <h4>Heckenstr.48 <br/> 38226 Salzgitter Lebenstedt (Alte Dorf)</h4>
                </span>
                <span>
                <FontAwesomeIcon icon={faPhoneFlip} className="contactIcon" /><br/>
                    <h3>Call Us</h3>
                    <p>Lorem Ipsum has been the industry's<br/> standard dummy text</p>
                    <h4>(+49) 53 41 / 26 777 00</h4>
                </span>
                <span>
                <FontAwesomeIcon icon={faEnvelope} className="contactIcon" /><br/>
                    <h3>Message Us</h3>
                    <p>but also the leap into<br/> electronic typesetting,</p>
                    <h4>physio.safin@gmail.com</h4>
                </span>

                <iframe title="frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.129462332437!2d10.32622691609419!3d52.150155279745924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a550c4319011c9%3A0x1c6d7b127389dc97!2sHeckenstra%C3%9Fe%2048%2C%2038226%20Salzgitter%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1652009132830!5m2!1spl!2spl" style={{border: 0, width: '100vw', height: 'auto'}} />
                

        </div>
        </div>
    )
}

export default Contact