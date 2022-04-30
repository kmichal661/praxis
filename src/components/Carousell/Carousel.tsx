import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Tile2, Tile1, Tile3 } from "./Tiles";

function CarousellHome(){
    return(
        <div className="wholeCarousel">
            <div className='navpad'></div>
        <Carousel
            showArrows={false}
            centerMode={true}
            showStatus={false}
            centerSlidePercentage={80}
            autoPlay={true}
            interval={3000}
            stopOnHover={true}
            // infiniteLoop={true}
        >
            <Tile1 />
            <Tile2 />
            <Tile3 />
        </Carousel>
        </div>
    )
}

export default CarousellHome