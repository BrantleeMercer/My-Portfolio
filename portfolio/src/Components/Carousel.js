import {useState, useEffect} from 'react';
import '../CSS Files/CarouselOverrides.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowLeftLong,
    faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = (props) => {
    const {children} = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1);
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1);
        }
    }
    
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                { currentIndex > 0 && <button onClick={prev} className="left-arrow">
                    <FontAwesomeIcon icon={faArrowLeftLong}/>
                </button>}
                <div className="carousel-content-wrapper">
                    <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {children}
                    </div>
                </div>
                { currentIndex < (length - 1) && <button onClick={next} className="right-arrow">
                    <FontAwesomeIcon icon={faArrowRightLong}/>
                </button>}
            </div>
        </div>
    )
}

export default Carousel