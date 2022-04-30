import {Container, Row} from 'react-bootstrap'
import {useState} from 'react'
import ThreapiesFull from "../components/TherapiesFull";



function Therapieen(){
    return(
        <div className="therapieen">
            <Container className="therapieen-front-line">
                <Row>
                    <h2>Unser Therapieangebot</h2>
                    <p>Wir bieten Ihnen ein breites Spektrum von physiotherapeutischen und rehabilitativen Therapien. Unser Ziel ist es dabei, bestmögliche Behandlungsergebnisse zu erzielen und Sie so schnell wie möglich wieder fit und belastbar für den Alltag und den Sport zu machen. Für die Behandlung von individuellen Krankheitsbildern stehen wir Ihnen mit einer vielfältigen und persönlichen Betreuung zur Seite.</p>
                </Row>
            </Container>

            <ThreapiesFull />


        </div>
    )
}

export default Therapieen