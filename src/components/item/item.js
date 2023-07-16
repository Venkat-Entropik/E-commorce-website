import { Link } from "react-router-dom"

const Item = ({ data, addToCart }) => {

    const { id, thumbnail, title, price } = data

    return (
        <div className="card">
            <div className="grid">
                <div className="image">
                    <img src={thumbnail} alt="img" />
                </div>
                <div className="title">
                    <Link to={`/product/${id}`} className="link titleLink">
                        {title}
                    </Link>
                </div>
                <div className="flex">
                    <span className="price" style={{ marginRight: 15 }}>
                        ${price}
                    </span>
                    <div className="cart" onClick={addToCart}>
                        <img className="cartImg" src="https://cdn-icons-png.flaticon.com/512/126/126083.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Item }