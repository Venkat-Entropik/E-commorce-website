import { Link } from "react-router-dom"
import './item.css'
const Item = ({ data, addToCart }) => {

    const { id, thumbnail, title, price,discountPercentage,rating } = data

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
                
                <h4 className="disc">$<span className='after1'>{price}</span> <span className='before1'>${Math.round((price/100)*discountPercentage)+price}</span><span className="discount">{Math.round(discountPercentage)}% off</span></h4>
                
                <div className="flex">
                    <span className="productRate" style={{ marginRight: 15 }}>
                        {rating} &#9733;
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