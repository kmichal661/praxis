import AboutImage from "./img/AboutImage.jpg"

function About(){
    return(
        <div className="about">
            
            {/* <div className="aboutImageSection">
                <img src={AboutImage}  alt="Kasia Safin"/>
                <br />
                <div className="aboutImageSign">
                <h3>Kasia Safin</h3>
                <p>Physiotherapeutin und Heilpraktikerin</p> 
                </div>
            </div> */}

            <div className="aboutTextSection">
                <h3>Physiotherapie in Salzgitter und Umgebung</h3>
                <p>Herzlich Willkommen auf der Homepage meiner Physiotherapie-Praxis. Die Praxis befindet sich im Zentrum von Salzgitter Lebenstedt, im Ärztehaus auf der Heckenstraße 48 ( Augenklinik Holak). Die Praxis ist sehr gut zu erreichen durch Bus und Bahn.<br/>Kostenfreie Parkplätze stehen Ihnen direkt vor der Praxis zur Verfügung. <br/><br/>Durch ständige Weiterbildung und jahrelange Erfahrung bietet unser Praxisteam moderne und ganzheitliche Therapieansätze, die auf neuesten Erkenntnissen beruhen und individuell auf Ihre Bedürfnisse und Ihre Erkrankung zugeschnitten sind.<br/><br/>Wir freuen uns auf Ihren Besuch!</p>
            </div>

        </div>
    )
}

export default About