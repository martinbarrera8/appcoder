import { Link } from "react-router-dom"


const Item = ({title, image, price, id}) => {
    return (
        <article className="card">
            <h1 className="card__title">{title}</h1>
            <img src={image} alt={title} className="card__img"/>
            <p className="card__price">${price}</p>
            <button className="card__button">
                <Link to={`/item/${id}`}>
                    Ver mas
                </Link>
            </button>

        </article>
    )
}

export default Item