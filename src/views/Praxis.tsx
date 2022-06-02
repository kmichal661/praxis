import {Container, Row,Col, Figure, Image} from 'react-bootstrap'
import Raum1 from '../components/img/Raum1.jpeg'
import Raum2 from '../components/img/Raum2.jpeg'
import Raum3 from '../components/img/Raum3.jpeg'
import Raum4 from '../components/img/Raum4.jpeg'
import Raum5 from '../components/img/Raum5.jpeg'
import Raum6 from '../components/img/Raum6.jpeg'

function Praxis(){
    return(
        <div className="praxisView">
            <Container className="praxisViewHeader">
            <h2>Entdecken Sie unsere Praxis</h2>
            <p>Auf dieser Seite möchten wir Ihnen einen ersten Eindruck von den räumlichen Gegebenheiten unserer Praxis vermitteln.</p>
            </Container>
            <br/>
            <Container fluid={true} className="praxisViewFigures">
                <Row className="praxisViewFiguresRow">
                <Image src={Raum1} fluid={true} />
                <Image src={Raum2} fluid={true} />
                <Image src={Raum3} fluid={true} />
                <Image src={Raum4} fluid={true} />
                <Image src={Raum5} fluid={true} />
                <Image src={Raum6} fluid={true} />

                </Row>
                <br />
            </Container>
        </div>
    )
}


export default Praxis