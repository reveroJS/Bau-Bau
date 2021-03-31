import "./MealCard.css";
import { Link } from "react-router-dom";


const MealCard = ({
    id,
    name,
    description,
    imageUrl
}) => {

    return (
        <div className="card">
            <div className="imgBox">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="content">
                <div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link className="buyButton" to={`/meals/detail/${id}`} >See More</Link>
                </div>
            </div>
        </div>
    );



}


export default MealCard;