import cardLogo from "./../assets/images/card-logo.svg";
import "./Card.css";
const Card = (props) => {
    return (
        <div id={props.type} className="card">
            <img src={props.src} alt={props.description}/>
            {props.type==="front"?
            <div className="info">
                <img id="logo" src={cardLogo} alt="Logo"/>
                <p className="white-color" id="card-number">1111222233334444</p>
                <p className="white-color" id="card-owner">Jesse Owens</p>
                <p className="white-color" id="expiration-date">22/22</p>
            </div>
            :
            <p className="white-color" id="cvc">123</p>
            }
        </div>
     );
}

export default Card;
