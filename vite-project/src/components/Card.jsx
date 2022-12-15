const Card = (props) => {
    return (
        <div className="card">
            <img src={props.src} alt={props.description}/>
        </div>
     );
}

export default Card;
