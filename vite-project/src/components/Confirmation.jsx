import icon from "./../assets/images/icon-complete.svg";
import "./Confirmation.css";
const Confirmation = () => {
    return (
        <section>
            <img src={icon} alt="Confirmation icon." />
            <h1>THANK YOU!</h1>
            <p>We've added your card details</p>
            <button type="button">Continue</button>
        </section>
     );
}

export default Confirmation;
