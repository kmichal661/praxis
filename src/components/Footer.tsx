import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faLocationDot, faPhoneFlip, faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'

function Footer(){

    function impressumClick(){
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return(
        <div className="footer">

            <div className="footerAddress">
                <div className="footerInner">
                <h2>Adresse</h2>
                <FontAwesomeIcon icon={faLocationDot} className="footerIcon" />  Heckenstr.48,38226 Salzgitter Lebenstedt (Alte Dorf) <br/> <br/>
                <FontAwesomeIcon icon={faPhoneFlip} className="footerIcon" /> (+49) 53 41 / 26 777 00 <br/><br/>
                <FontAwesomeIcon icon={faEnvelope} className="footerIcon" /> physio.safin@gmail.com <br/><br/>
                <FontAwesomeIcon icon={faBook} className="footerIcon" />
                <span  ><NavLink onClick={impressumClick} to="/impressum" style={{color: 'white', textDecoration: 'none'}}>Impressum</NavLink></span> 
                <span id="footerDatenschutz" ><NavLink onClick={impressumClick} to="/datenschutz" style={{color: 'white', textDecoration: 'none'}}>Datenschutz</NavLink></span>
                </div> 
            </div>
            <div className="footerOpenings">
                <div className="footerInner">
                    <h2>Öffnungszeiten</h2>
                    <FontAwesomeIcon icon={faCalendarDays} className="footerIcon" /> Montag:  09:00 - 19:00 <br/><br/>
                    <FontAwesomeIcon icon={faCalendarDays} className="footerIcon" /> Dienstag:  08:00 - 18:00<br/><br/>
                    <FontAwesomeIcon icon={faCalendarDays} className="footerIcon" /> Mittwoch:  09:00 - 19:00<br/><br/>
                    <FontAwesomeIcon icon={faCalendarDays} className="footerIcon" /> Donnerstag:  08:00 - 18:00<br/><br/>
                    <FontAwesomeIcon icon={faCalendarDays} className="footerIcon" /> Freitag:  08:00 - 14:00<br/><br/>

                </div>
            </div>

        </div>
    )
}

export default Footer