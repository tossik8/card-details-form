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
        let warning = document.createElement("p");
        warning.classList.add("error-message");
        // document.getElementsByName("card-number")[0].classList.remove("red-border");
        // document.getElementsByName("year")[0].classList.remove("red-border");
        // document.getElementsByName("month")[0].classList.remove("red-border");
        // let errors = document.getElementsByTagName("fieldset")[0].getElementsByClassName("error-message");
        // for(let error of errors){
        //     console.log(error);
        //     error.parentNode.removeChild(error);
        // }
        if(!containsLetter(formReducer.cvc)){
            if(!document.getElementsByName("cvc")[0].classList.contains("red-border")){
                warning.id = "cvc-error";
                document.getElementsByName("cvc")[0].after(warning);
                document.getElementsByName("cvc")[0].classList.add("red-border");
            }
            document.getElementById("cvc-error").innerHTML = "Wrong format. Numbers only";
        }
        else if(formReducer.cvc.length < 3){
            if(!document.getElementsByName("cvc")[0].classList.contains("red-border")){
                warning.id = "cvc-error";
                document.getElementsByName("cvc")[0].after(warning);
                document.getElementsByName("cvc")[0].classList.add("red-border");
            }
            document.getElementById("cvc-error").innerHTML = "Must be 3 numbers";
        }
        else{
            document.getElementsByName("cvc")[0].classList.remove("red-border");
            if(document.getElementById("cvc-error") !== null){
                document.getElementById("cvc-error").parentNode.removeChild(document.getElementById("cvc-error"));
            }
        }
        if(!containsLetter(formReducer.month)){
            let warning = document.createElement("p");
            warning.classList.add("error-message");

            warning.innerHTML = "Wrong format";
            warning.id = "month-error";
            document.getElementsByName("month")[0].after(warning);
            document.getElementsByName("month")[0].classList.add("red-border");
        }
        else if(formReducer.month.length < 2){
            let warning = document.createElement("p");
            warning.classList.add("error-message");

            warning.innerHTML = "Must be 2 numbers";
            warning.id = "month-error";
            document.getElementsByName("month")[0].after(warning);
            document.getElementsByName("month")[0].classList.add("red-border");
        }
    }


    function containsLetter(string){
        for(let i = 0; i < string.length; ++i){
            if(isNaN(string.charAt(i))) return false;
        }
        return true;
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
            <button type="button" onClick={handleSubmit}>Confirm</button>
        </form>
    </section> );
}

export default Form;
