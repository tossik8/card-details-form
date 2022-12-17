import { useDispatch } from "react-redux";
import { formActions } from "../store/formSlice";
import icon from "./../assets/images/icon-complete.svg";
import "./Confirmation.css";
const Confirmation = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(formActions.clearData());
        dispatch(formActions.changeIsForm(true));
    }

    return (
        <section id="confirmation">
            <img src={icon} alt="Confirmation icon." />
            <h1>THANK YOU!</h1>
            <p id="description">We've added your card details</p>
            <button type="button" onClick={handleClick}>Continue</button>
        </section>
     );
}

export default Confirmation;
