const Form = () => {
    return (
     <section>
        <form>
            <label htmlFor="cardholder">Cardholder Name</label>
            <input type="text" name="cardholder" placeholder="e.g. Jane Appleseed"/>
            <label htmlFor="card-number">Card Number</label>
            <input type="text" name="card-number" placeholder="  e.g. 1234 5678 9123 0000"/>
            <fieldset>
                <legend>Exp. Date (MM/YY)</legend>
                <input type="text" name="month" placeholder="MM"/>
                <input type="text" name="year" placeholder="YY"/>
                <input type="text" name="cvc" placeholder="  e.g. 123"/>
            </fieldset>
            <button type="submit">Confirm</button>
        </form>
    </section> );
}

export default Form;
