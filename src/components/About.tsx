import AboutImage from "./img/AboutImage.jpg"

function About(){
    return(
        <div className="about">
            
            <div className="aboutImageSection">
                <img src={AboutImage}  alt="Kasia Safin"/>
                <br />
                <h3>Kasia Safin</h3>
                <p>Physiotherapeutin und Heilpraktikerin</p>

            </div>

            <div className="aboutTextSection">
                <h3>Physiotherapie in Salzgitter und Umgebung</h3>
                <p>Herzlich Willkommen auf der Homepage meiner Physiotherapie-Praxis. Die Praxis befindet sich mitten im Ortskern von Salzgitter Thiede. Kostenfreie Parkplätze stehen Ihnen direkt vor der Praxis zur Verfügung. In angenehmer Atmosphäre nehmen wir uns Zeit für Ihre ganz individuelle Behandlung. Hierbei legen wir vor allem Wert auf einen ganzheitlichen Therapieansatz und greifen dabei auf umfangreiche Zusatzqualifikationen, wie z.B. Manueller Therapie, Bobath-Therapie, Manuelle Lymphdrainage, Kiefergelenkbehandlung und Faszientherapie zurück.<br/><br/>

Für Terminvereinbarungen erreichen Sie uns persönlich von Montag bis Freitag im Zeitraum von 9:00 bis 13:00 Uhr unter der Telefonnummer 05341–40 222 44.<br/><br/> Außerhalb dieses Zeitraumes hinterlassen Sie uns eine Nachricht auf dem Anrufbeantworter und wir rufen Sie umgehend zurück.<br/><br/>

Wir freuen uns aus auf Ihre Terminvereinbarung!<br/><br/>

Ihre Kasia Safin & Team</p>
            </div>

        </div>
    )
}

export default About