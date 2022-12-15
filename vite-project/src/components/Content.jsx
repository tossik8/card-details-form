import Attribution from './Attribution';
import Card from './Card';
import Confirmation from './Confirmation';
import Form from './Form';
import frontCard from "../assets/images/bg-card-front.png";
import backCard from "../assets/images/bg-card-back.png";
import "./Content.css";
const Content = () => {
    return (
        <main>
            <div className="cards">
                <Card src={frontCard} description="Front side of a credit card."/>
                <Card src={backCard} description="Back side of a credit card."/>
            </div>
            <div className="">
                <Form/>
                {/*<Confirmation/>*/}
                <Attribution/>
            </div>

        </main>

     );
}

export default Content;
