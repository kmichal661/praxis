import hotStone from './img/hot-stone.png'
import foot from './img/foot.jpg'
import massage from './img/massage.jpg'
import one_ from './img/one_.png'
import { useState } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'

function Therapie(props: any){

    const [diplayHeader, setDisplayHeader] = useState(true)

    function handleOnClick(e:any, id:number){
        props.setActiveTherapy(id)
    }

    return(
        
        <div className="therapie" style={{backgroundImage: `url(${props.img})`, color: props.textColor}} onMouseEnter={() => setDisplayHeader(false)} onMouseLeave={() => setDisplayHeader(true)} onClick={(e:any) => handleOnClick(e, props.id)}>
            {diplayHeader ? <h2 className='displayHeader'>{props.title}</h2> : ""}
            <div className="therapieOverlay">
                <div className="therapieText">
                    <h3>{props.title}</h3>
                    <p>{props.shortDescription}</p>
                    {/* <Button variant="primary">See More</Button> */}
                </div>
            </div>
        </div>
    )
}



function ThreapiesFull(){

    

    const therapies = [
        {
            id: 0,
            textColor: 'black',
            title: "Krankengymnastik",
            shortDescription: "Krankengymnastik ist eine Form der äußerlichen Anwendung",
            img: hotStone,
            link: "therapie1 link to full description ?",
            fullDescription: "Was Ist Krankengymnastik?\n\nKrankengymnastik ist eine Form der äußerlichen Anwendung von Heilmitteln, mit der v. a. die Bewegungs- und Funktionsfähigkeit des menschlichen Körpers wiederhergestellt, verbessert oder erhalten werden soll.\n\nZiel der Krankengymnastik ist es, eingeschränkte Körperfunktionen zu beseitigen oder präventiv zu vermeiden. Oftmals sind Fehlhaltungen im Job, eine muskuläre Schwäche, oder eine vorangegangene Verletzung oder Operation verantwortlich für entstehende und anhaltende Schmerzen.\n\nBei der Krankengymnastik wird dem Patienten gezeigt, wie Fehlhaltungen erkannt werden und im Alltag selbst dagegen vorgegangen wird. Durch die Erstellung eines Eigenübungsprogramms kann der Patient während und nach der Behandlung langfristig gegen seine Probleme vorgehen. Zusätzlich können in der Krankengymnastik Schmerzen gelindert und die Durchblutung und der Stoffwechsel im betroffenem Gewebe angeregt werden.\n\n\nEinsatzbereiche der Krankengymnastik\n\n- Schmerzen\n- Migräne / Kopfschmerz\n- Verspannungen\n- Bewegungseinschränkungen\n- Postoperativ\n- Posttraumatisch\n- Sportverletzungen (Prellung, Zerrung Muskelfaserriss)\n- Verhärtete Muskulatur nach sportlicher Leistung\n- Verkürzte Muskulatur\n- Verklebte Narben\n- Muskuläre Schwäche\n- Muskuläre Dysbalancen\n- Gleichgewichtsprobleme\n- Koordinationsprobleme\n- Instabilitäten\n- Arthrose\n- Bandscheibenvorfälle\n- Rheuma\n- Fehlstellungen der Wirbelsäule\n- Fehlhaltungen\n- Dessen"
        },
        {
            id:1,
            textColor: 'black',
            title: "Foot Massage",
            shortDescription: "therapie 2 description message",
            img: foot,
            link: "therapie2 link to full description ?",
            fullDescription: "Was Ist Krankengymnastik?\n\nKrankengymnastik ist eine Form der äußerlichen Anwendung von Heilmitteln, mit der v. a. die Bewegungs- und Funktionsfähigkeit des menschlichen Körpers wiederhergestellt, verbessert oder erhalten werden soll.\n\nZiel der Krankengymnastik ist es, eingeschränkte Körperfunktionen zu beseitigen oder präventiv zu vermeiden. Oftmals sind Fehlhaltungen im Job, eine muskuläre Schwäche, oder eine vorangegangene Verletzung oder Operation verantwortlich für entstehende und anhaltende Schmerzen.\n\nBei der Krankengymnastik wird dem Patienten gezeigt, wie Fehlhaltungen erkannt werden und im Alltag selbst dagegen vorgegangen wird. Durch die Erstellung eines Eigenübungsprogramms kann der Patient während und nach der Behandlung langfristig gegen seine Probleme vorgehen. Zusätzlich können in der Krankengymnastik Schmerzen gelindert und die Durchblutung und der Stoffwechsel im betroffenem Gewebe angeregt werden.\n\n\nEinsatzbereiche der Krankengymnastik\n\n- Schmerzen\n- Migräne / Kopfschmerz\n- Verspannungen\n- Bewegungseinschränkungen\n- Postoperativ\n- Posttraumatisch\n- Sportverletzungen (Prellung, Zerrung Muskelfaserriss)\n- Verhärtete Muskulatur nach sportlicher Leistung\n- Verkürzte Muskulatur\n- Verklebte Narben\n- Muskuläre Schwäche\n- Muskuläre Dysbalancen\n- Gleichgewichtsprobleme\n- Koordinationsprobleme\n- Instabilitäten\n- Arthrose\n- Bandscheibenvorfälle\n- Rheuma\n- Fehlstellungen der Wirbelsäule\n- Fehlhaltungen\n- Dessen"
        },
        {
            id:2,
            textColor: 'black',
            title: "Massage",
            shortDescription: "simple massaage descirption",
            img: massage,
            link: "therapie2 link to full description ?",
            fullDescription: "Was Ist Krankengymnastik?\n\nKrankengymnastik ist eine Form der äußerlichen Anwendung von Heilmitteln, mit der v. a. die Bewegungs- und Funktionsfähigkeit des menschlichen Körpers wiederhergestellt, verbessert oder erhalten werden soll.\n\nZiel der Krankengymnastik ist es, eingeschränkte Körperfunktionen zu beseitigen oder präventiv zu vermeiden. Oftmals sind Fehlhaltungen im Job, eine muskuläre Schwäche, oder eine vorangegangene Verletzung oder Operation verantwortlich für entstehende und anhaltende Schmerzen.\n\nBei der Krankengymnastik wird dem Patienten gezeigt, wie Fehlhaltungen erkannt werden und im Alltag selbst dagegen vorgegangen wird. Durch die Erstellung eines Eigenübungsprogramms kann der Patient während und nach der Behandlung langfristig gegen seine Probleme vorgehen. Zusätzlich können in der Krankengymnastik Schmerzen gelindert und die Durchblutung und der Stoffwechsel im betroffenem Gewebe angeregt werden.\n\n\nEinsatzbereiche der Krankengymnastik\n\n- Schmerzen\n- Migräne / Kopfschmerz\n- Verspannungen\n- Bewegungseinschränkungen\n- Postoperativ\n- Posttraumatisch\n- Sportverletzungen (Prellung, Zerrung Muskelfaserriss)\n- Verhärtete Muskulatur nach sportlicher Leistung\n- Verkürzte Muskulatur\n- Verklebte Narben\n- Muskuläre Schwäche\n- Muskuläre Dysbalancen\n- Gleichgewichtsprobleme\n- Koordinationsprobleme\n- Instabilitäten\n- Arthrose\n- Bandscheibenvorfälle\n- Rheuma\n- Fehlstellungen der Wirbelsäule\n- Fehlhaltungen\n- Dessen"
        },
        {
            id:3,
            textColor: 'black',
            title: "Anything",
            shortDescription: "Anything Description of nothing",
            img: one_,
            link: "therapie2 link to full description ?",
            fullDescription: "Was Ist Krankengymnastik?\n\nKrankengymnastik ist eine Form der äußerlichen Anwendung von Heilmitteln, mit der v. a. die Bewegungs- und Funktionsfähigkeit des menschlichen Körpers wiederhergestellt, verbessert oder erhalten werden soll.\n\nZiel der Krankengymnastik ist es, eingeschränkte Körperfunktionen zu beseitigen oder präventiv zu vermeiden. Oftmals sind Fehlhaltungen im Job, eine muskuläre Schwäche, oder eine vorangegangene Verletzung oder Operation verantwortlich für entstehende und anhaltende Schmerzen.\n\nBei der Krankengymnastik wird dem Patienten gezeigt, wie Fehlhaltungen erkannt werden und im Alltag selbst dagegen vorgegangen wird. Durch die Erstellung eines Eigenübungsprogramms kann der Patient während und nach der Behandlung langfristig gegen seine Probleme vorgehen. Zusätzlich können in der Krankengymnastik Schmerzen gelindert und die Durchblutung und der Stoffwechsel im betroffenem Gewebe angeregt werden.\n\n\nEinsatzbereiche der Krankengymnastik\n\n- Schmerzen\n- Migräne / Kopfschmerz\n- Verspannungen\n- Bewegungseinschränkungen\n- Postoperativ\n- Posttraumatisch\n- Sportverletzungen (Prellung, Zerrung Muskelfaserriss)\n- Verhärtete Muskulatur nach sportlicher Leistung\n- Verkürzte Muskulatur\n- Verklebte Narben\n- Muskuläre Schwäche\n- Muskuläre Dysbalancen\n- Gleichgewichtsprobleme\n- Koordinationsprobleme\n- Instabilitäten\n- Arthrose\n- Bandscheibenvorfälle\n- Rheuma\n- Fehlstellungen der Wirbelsäule\n- Fehlhaltungen\n- Dessen"
        }
    ]
    const [activeCard, setActiveCard] = useState(therapies[0])
    const [displayActiveCard, setDisplayActiveCard] = useState(true)

    function setActiveTherapy(activeTherapy: number){
        let therapy = therapies.filter(el => el.id === activeTherapy)[0]
        setActiveCard(therapy)
        setDisplayActiveCard(true)
        let element = document.getElementsByClassName("navpad")[0]
        setTimeout(() => {
            element.scrollIntoView({behavior: 'smooth', block: "start", inline: 'nearest',})
        },1)
        
        
        
    }

    const therapieTiles = therapies.map((e) => {
        return <Col><Therapie id={e.id} title={e.title} img={e.img} shortDescription={e.shortDescription} setActiveTherapy={setActiveTherapy} textColor={e.textColor} /></Col>
    })


    // return(
    //     <>
    //     <div className="therapies">{therapieTiles}</div>
    //     <div className="therapiesFullDescription">
    // {displayActiveCard?
    // <div className="therapyActiveCard"> 
    //     <h2>{activeCard.title}</h2>
    //     <p>{activeCard.fullDescription}</p>
    // </div>
    // : ""}
    //     </div>
    //     </>
    // )

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
    <div className="therapyActiveCard"> 
        <h2>{activeCard.title}</h2>
        <p>{activeCard.fullDescription}</p>
    </div>
    : ""}
        </div>
        </Container>

        </>
        
    )
}


export default ThreapiesFull