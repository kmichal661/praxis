
import { useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Animated} from "react-animated-css";
import { faSuitcaseMedical, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {therapies} from './exptherapies'

function Therapie(props: any){

    const [diplayHeader, setDisplayHeader] = useState(true)

    function handleOnClick(e:any, id:number){
        props.setActiveTherapy(id)
    }

    return(
        <div>
        <div className="therapie" style={{backgroundImage: `url(${props.img})`, color: props.textColor}} onMouseEnter={() => setDisplayHeader(false)} onMouseLeave={() => setDisplayHeader(true)} onClick={(e:any) => handleOnClick(e, props.id)}>
            {diplayHeader ? <div className='displayHeaderWrapper'> <FontAwesomeIcon icon={faPlus} className="contactIcon" /><h2 className='displayHeader'>{props.title}</h2></div> : ""}
            <div className="therapieOverlay">
                <div className="therapieText">
                    <h3>{props.title}</h3>
                    <FontAwesomeIcon icon={faSuitcaseMedical} className="contactIcon" />
                    <p>{props.shortDescription}</p>
                    {/* <Button variant="primary">See More</Button> */}
                </div>
            </div>
        </div>
        </div>
    )
}



function ThreapiesFull(){

    
    const [activeCard, setActiveCard] = useState(therapies[0])
    const [displayActiveCard, setDisplayActiveCard] = useState(true)
    const [act, setAct] = useState(true)

    function setActiveTherapy(activeTherapy: number){
        setAct(false)
        let therapy = therapies.filter(el => el.id === activeTherapy)[0]
        setActiveCard(therapy)
        setDisplayActiveCard(true)
        let element = document.getElementsByClassName("navpad")[0]
        setTimeout(() => {
            element.scrollIntoView({behavior: 'smooth', block: "start", inline: 'nearest',})
            setAct(true)
        },1)
        
        
        
    }

    const therapieTiles = therapies.map((e) => {
        return <Col><Therapie id={e.id} title={e.title} img={e.img} shortDescription={e.shortDescription} setActiveTherapy={setActiveTherapy} textColor={e.textColor}  /></Col>
    })

    const bulls = activeCard.bullets.map((e:any) => {
        return <div className="bulletPoints"><FontAwesomeIcon icon={faCheck} className="contactIcon" /> {e}</div>
    })


    return(
        <>
        <Container  >
            <Row className="therapies" >
            {therapieTiles}
            </Row>
        </Container>
        <Container className="navpad"></Container>
        <Container>
        <div className="therapiesFullDescription">
    {displayActiveCard?
    <Animated animationIn="bounceInLeft" animationOut="bounceOutRight" isVisible={act} >
    <div className="therapyActiveCard"> 
        <h2>{activeCard.title}</h2>
        <p>{activeCard.fullDescription}</p>
        <p>{bulls}</p>
    </div>
    </Animated>
    : ""}
        </div>
        </Container>

        </>
        
    )
}


export default ThreapiesFull