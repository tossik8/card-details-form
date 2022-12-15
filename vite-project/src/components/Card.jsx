import cardLogo from "./../assets/images/card-logo.svg";
const Card = (props) => {
    return (
        <div id={props.type} className="card">
            <img src={props.src} alt={props.description}/>
            {props.type==="front"?
            <div className="info">
                <img src={cardLogo} alt="Logo"/>
                <p id="card-number"></p>
                <p id="card-owner"></p>
                <p id="expiration-date"></p>
            </div>
            :
            <p id="cvc"></p>
            }
        </div>
     );
}

export default Card;
