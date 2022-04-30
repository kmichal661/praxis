import { url } from 'inspector'
import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'
import five from './img/five.png'

export function Tile1(){
    return(
        <div className="carouselTile" style={{backgroundImage: `url(${one})`}}>
            <div style={{position:"absolute", marginLeft: "40vw", marginTop: "2vh", color: "white"}}>
             <h3>Wir sind für Euch da...</h3>
             <p>Physiotherapeuten in Deutschland</p>
             </div>
        </div>
    )
}

export function Tile2(){
    return(
        <div className="carouselTile" style={{backgroundImage: `url(${two})`}}>
            <div style={{textAlign: 'left', marginLeft: "3vw", marginTop: "25vw", color: "white", position: 'absolute'}}>
             <h3>Physiotherapie Kasia Safin</h3>
             <p>Moderne Räume und ruhige Atmosphäre</p>
             </div>
        </div>
    )
}

export function Tile3(){
    return(
        <div className="carouselTile" style={{backgroundImage: `url(${five})`}}>
            <div style={{textAlign: 'left', marginLeft: "3vw", marginTop: "21vw", position: "absolute", color: "white"}}>
             <h3>Physiotherapie in Salzgitter Thiede</h3>
             <p>Manuelle Therapie</p>
             </div>
        </div>
    )
}