import "./Form.css";

const Form = () => {
    return (
     <section>
        <form>
            <label htmlFor="cardholder">Cardholder Name</label>
            <input type="text" name="cardholder" placeholder="e.g. Jane Appleseed"/>
            <label htmlFor="card-number">Card Number</label>
            <input type="text" name="card-number" placeholder="e.g. 1234 5678 9123 0000" maxLength={16}/>
            <fieldset>
                <legend><p>Exp. Date (MM/YY)</p><p>CVC</p></legend>
                <div className="expiration-inputs">
                    <input type="text" name="month" placeholder="MM" maxLength={2}/>
                    <input type="text" name="year" placeholder="YY" maxLength={2}/>
                </div>
                <input type="text" name="cvc" placeholder="e.g. 123" maxLength={3}/>
            </fieldset>
            <button type="submit">Confirm</button>
        </form>
    </section> );
}

export default Form;
