import one from './img/on.jpg'
import two from './img/two.png'
import five from './img/five.png'

export function Tile3(){
    return(
        <div className="carouselTile" style={{backgroundImage: `url(${one})`}}>
            <div style={{position:"absolute", marginLeft: "40vw", marginTop: "5vh", backgroundColor: "RGBA(0,0,0,0.7)", color: "white", width: "40%" }}>
             <h3>Wir sind für Euch da...</h3>
             <p>Physiotherapeuten in Deutschland</p>
             </div>
        </div>
    )
}

export function Tile1(){
    return(
        <div className="carouselTile" style={{backgroundImage: `url(${two})`}}>
            <div style={{textAlign: 'left', marginLeft: "0vw", paddingLeft: '3vw' ,marginTop: "5vh", color: "white", position: 'absolute',backgroundColor: "RGBA(0,0,0,0.7)", width: "40%"}}>
             <h3>Physiotherapie Kasia Safin</h3>
             <p>Moderne Räume und ruhige Atmosphäre</p>
             </div>
        </div>
    )
}

export function Tile2(){
    return(
        <div className="carouselTile" style={{backgroundImage: `url(${five})`}}>
            <div style={{textAlign: 'left', marginLeft: "0vw", paddingLeft: '3vw' ,marginTop: "5vh", position: "absolute", backgroundColor: "RGBA(0,0,0,0.7)", color: "white", width: "40%"}}>
             <h3>Physiotherapie in Salzgitter Thiede</h3>
             <p>Therapie</p>
             </div>
        </div>
    )
}