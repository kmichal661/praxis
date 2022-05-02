import hotStone from './img/hot-stone.png'
import foot from './img/foot.jpg'
import massage from './img/massage.jpg'
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Animated} from "react-animated-css";

function Therapie(props: any){

    const [diplayHeader, setDisplayHeader] = useState(true)

    function handleOnClick(e:any, id:number){
        console.clear()
        console.log("Clicked ME")
        console.log(e)
        console.log(id)
        props.setActiveTherapy(id)
    }

    return(
        
        <div className="therapie" style={{backgroundImage: `url(${props.img})`}} onMouseEnter={() => setDisplayHeader(false)} onMouseLeave={() => setDisplayHeader(true)} onClick={(e:any) => handleOnClick(e, props.id)}>
            {diplayHeader ? <h2>{props.title}</h2> : ""}
            <div className="therapieOverlay">
                <div className="therapieText">
                    <h3>{props.title}</h3>
                    <p>{props.shortDescription}</p>
                </div>
            </div>
        </div>
    )
}



function Threapies(){

    

    const therapies = [
        {
            id: 0,
            active: true,
            title: "Krankengymnastik",
            shortDescription: "Krankengymnastik ist eine Form der äußerlichen Anwendung",
            img: hotStone,
            link: "therapie1 link to full description ?",
            fullDescription: "Instabile Gelenke werden stabilisiert, Gleichgewichtsübungen helfen die Gangsicherheit wiederherzustellen und Schwindelübungen den Schwindel zu beseitigen. Der Einsatz der Krankengymnastik ist sehr vielfältig und richtet sich individuell nach der Diagnose des Patienten."
        },
        {
            id:1,
            active: false,
            title: "Foot Massage",
            shortDescription: "therapie 2 description message",
            img: foot,
            link: "therapie2 link to full description ?",
            fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id:2,
            active: false,
            title: "Massage",
            shortDescription: "simple massaage descirption",
            img: massage,
            link: "therapie2 link to full description ?",
            fullDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
    ]
    const [activeCard, setActiveCard] = useState(therapies[0])
    const [displayActiveCard, setDisplayActiveCard] = useState(true)
    const [act, setAct] = useState(true)

    function setActiveTherapy(activeTherapy: number){
        setAct(false)
        let therapy = therapies.filter(el => el.id === activeTherapy)[0]
        setActiveCard(therapy)
        setDisplayActiveCard(true)
        let element = document.getElementsByClassName("navpad")[1]
        setTimeout(() => {
            
            element.scrollIntoView({behavior: 'smooth', block: "start", inline: 'nearest'})
            setAct(true)
        },1)
        
        
        
    }

    const therapieTiles = therapies.map((e) => {
        return <Therapie id={e.id} title={e.title} img={e.img} shortDescription={e.shortDescription} setActiveTherapy={setActiveTherapy} />
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
        
        
    </div>
    </Animated>
   
    : ""}
        </div>
        
        </Container>
        </>
    )
}


export default Threapies