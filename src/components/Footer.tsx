import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faLocationDot, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer(){
    return(
        <div className="footer">

            <div className="footerAddress">
                <div className="footerInner">
                <h2>Adresse</h2>
                <FontAwesomeIcon icon={faLocationDot} className="footerIcon" />  Adalbert-Stifter Straße 7, 38239 Salzgitter <br/> <br/>
                <FontAwesomeIcon icon={faPhoneFlip} className="footerIcon" /> 0 53 41 / 40 222 44 <br/><br/>
                <FontAwesomeIcon icon={faEnvelope} className="footerIcon" /> physiotherapieKasia@zajebistyPraxis.de <br/><br/>
                </div>
            </div>
            <div className="footerOpenings">
                <div className="footerInner">
                    <h2>Öffnungszeiten</h2>
                    <FontAwesomeIcon icon={faCalendarDays} className="footerIcon" /> Montag - Donnerstag:  08:00 - 16:00 <br/><br/>
                    <FontAwesomeIcon icon={faCalendarDays} className="footerIcon" /> Freitag:  08:00 - 14:00<br/><br/>

                </div>
            </div>

        </div>
    )
}

export default Footer