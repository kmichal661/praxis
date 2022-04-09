import hotStone from './img/hot-stone.jpg'
import foot from './img/foot.jpg'
import massage from './img/massage.jpg'
import { useState } from 'react'

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
            title: "Hot Stone Massage",
            shortDescription: "therapie 1 description message",
            img: hotStone,
            link: "therapie1 link to full description ?",
            fullDescription: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        },
        {
            id:1,
            title: "Foot Massage",
            shortDescription: "therapie 2 description message",
            img: foot,
            link: "therapie2 link to full description ?",
            fullDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id:2,
            title: "Massage",
            shortDescription: "simple massaage descirption",
            img: massage,
            link: "therapie2 link to full description ?",
            fullDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        }
    ]
    const [activeCard, setActiveCard] = useState(therapies[0])
    const [displayActiveCard, setDisplayActiveCard] = useState(true)

    function setActiveTherapy(activeTherapy: number){
        let therapy = therapies.filter(el => el.id === activeTherapy)[0]
        setActiveCard(therapy)
        setDisplayActiveCard(true)
        let element = document.getElementsByClassName("therapies")[0]
        setTimeout(() => {
            element.scrollIntoView({behavior: 'smooth', block: "start", inline: 'nearest'})
        },1)
        
        
        
    }

    const therapieTiles = therapies.map((e) => {
        return <Therapie id={e.id} title={e.title} img={e.img} shortDescription={e.shortDescription} setActiveTherapy={setActiveTherapy} />
    })


    return(
        <>
        <div className="therapies">{therapieTiles}</div>
        <div className="therapiesFullDescription">
    {displayActiveCard?
    <div className="therapyActiveCard"> 
        <h2>{activeCard.title}</h2>
        <p>{activeCard.fullDescription}</p>
    </div>
    : ""}
        </div>
        </>
    )
}


export default Threapies