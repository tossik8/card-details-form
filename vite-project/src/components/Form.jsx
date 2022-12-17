import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store/formSlice";
import "./Form.css";

const Form = () => {
    const formReducer = useSelector(state => state.formReducer);

    const dispatch = useDispatch();

    const handleCardholderName = (event) => {
        dispatch(formActions.changeCardholderName(event.target.value));
    }

    const handleCardNumber = (event) => {
        dispatch(formActions.changeCardNumber(event.target.value));
    }

    const handleMonth = (event) => {
        dispatch(formActions.changeMonth(event.target.value));
    }

    const handleYear = (event) => {
         dispatch(formActions.changeYear(event.target.value));
    }
    const handleCvc = (event) => {
        dispatch(formActions.changeCVC(event.target.value));
    }

    const handleSubmit = () => {
        return checkError(formReducer.cvc, 3, "cvc") && checkError(formReducer.month, 2, "month") &&
            checkError(formReducer.year, 2, "year") && checkError(formReducer.cardNumber, 16, "card-number")? dispatch(formActions.changeIsForm(false)): null;
    }


    function containsLetter(string){
        for(let i = 0; i < string.length; ++i){
            if(isNaN(string.charAt(i)) || string.charAt(i) ===' ') return false;
        }
        return true;
    }

    function checkError(content, length, name){
        let isCorrect = true;
        let warning = document.createElement("p");
        warning.classList.add("error-message");
        if(!containsLetter(content)){
            if(!document.getElementsByName(name)[0].classList.contains("red-border")){
                warning.id = name+"-error";
                document.getElementsByName(name)[0].after(warning);
                document.getElementsByName(name)[0].classList.add("red-border");
            }
            document.getElementById(name+"-error").innerHTML = "Numbers only";
            isCorrect = false;
        }
        else if(content.length < length){
            if(!document.getElementsByName(name)[0].classList.contains("red-border")){
                warning.id = name+"-error";
                document.getElementsByName(name)[0].after(warning);
                document.getElementsByName(name)[0].classList.add("red-border");
            }
            document.getElementById(name+"-error").innerHTML = length + " numbers";
            isCorrect = false;
        }
        else{
            document.getElementsByName(name)[0].classList.remove("red-border");
            if(document.getElementById(name+"-error") !== null){
                document.getElementById(name+"-error").parentNode.removeChild(document.getElementById(name+"-error"));
            }
        }
        return isCorrect;
    }


    return (
     <section id="section-form">
        <form>
            <label htmlFor="cardholder">Cardholder Name</label>
            <input type="text" name="cardholder" value={formReducer.cardholderName} placeholder="e.g. Jane Appleseed" onChange={handleCardholderName}/>
            <label htmlFor="card-number">Card Number</label>
            <input type="text" name="card-number" value={formReducer.cardNumber} onChange={handleCardNumber} placeholder="e.g. 1234 5678 9123 0000" maxLength={16} pattern="[0-9]+"/>
            <fieldset>
                <legend><p>Exp. Date (MM/YY)</p><p>CVC</p></legend>
                <div className="expiration-inputs">
                    <input type="text" name="month" value={formReducer.month} onChange={handleMonth} placeholder="MM" maxLength={2}/>
                    <input type="text" name="year" value={formReducer.year} onChange={handleYear} placeholder="YY" maxLength={2}/>
                </div>
                <input type="text" name="cvc" value={formReducer.cvc} onChange={handleCvc} placeholder="e.g. 123" maxLength={3}/>
            </fieldset>
            <button id="confirm-button" type="button" onClick={handleSubmit}>Confirm</button>
        </form>
    </section> );
}

export default Form;
