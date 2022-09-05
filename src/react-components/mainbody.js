import image1 from "../images/Rectangle 77.png"
import image2 from "../images/Rectangle 77.png"
import image3 from "../images/Rectangle 77.png"
import locationImage from "../images/Fill 219.png"

function Mainbody(props) {
    return (
        
        <>
            <div className="main-container">
                <div className="image-container">
                    <img src={props.img} alt="bodyImage" className="bodyImage"/>
                </div>
                <div className="info-container">
                    <img src={locationImage} alt="infoImage" />
                    <span className="location">{props.location}</span>
                    <span className="info-link">
                        <a href={props.link} target="blank" >View on google maps</a></span>
                        <h1>{props.title}</h1>
                        <p className="date">{props.date}</p>
                        <p>{props.description}</p>
                </div>
            </div>
        </>

)
}

export default Mainbody;