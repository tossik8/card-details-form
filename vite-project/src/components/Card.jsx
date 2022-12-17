import { useEffect } from "react";
import { useSelector } from "react-redux";
import cardLogo from "./../assets/images/card-logo.svg";
import "./Card.css";
const Card = (props) => {

    const formReducer = useSelector(state => state.formReducer);
    useEffect(() => {
        document.getElementById("card-number").textContent = formReducer.cardNumber.padEnd(16,"0");
        document.getElementById("card-number").textContent = document.getElementById("card-number").textContent.substring(0,4) + " " + document.getElementById("card-number").textContent.substring(4,8) + " " + document.getElementById("card-number").textContent.substring(8,12) + " " + document.getElementById("card-number").textContent.substring(12,16);
        document.getElementById("expiration-date").textContent = formReducer.month.padEnd(2,"0") + "/"+ formReducer.year.padEnd(2,"0");
        document.getElementById("cvc").textContent = formReducer.cvc.padEnd(3,"0");


    })


    return (
        <div id={props.type} className="card">
            <img src={props.src} alt={props.description}/>
            {props.type==="front"?
            <div className="info">
                <img id="logo" src={cardLogo} alt="Logo"/>
                <p className="white-color" id="card-number"></p>
                <p className="white-color"  id="card-owner">{formReducer.cardholderName.length === 0? "JANE APPLESEED":formReducer.cardholderName.toUpperCase()}</p>
                <p className="white-color"  id="expiration-date">/</p>
            </div>
            :
            <p className="white-color"  id="cvc">123</p>
            }
        </div>
     );
}

export default Card;
