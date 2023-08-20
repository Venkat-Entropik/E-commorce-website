import { Link } from "react-router-dom"
import { useState } from "react"
import AuthModel from "../../Authentication/AuthModel";
import { useCart } from "../../context/cart";
import UserSidebar from "../../Authentication/UserSidebar";
const NavBar = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setSearchQuery] = useState('');
    const{user} = useCart()
    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid1">
                        <Link to="/" className="link">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4pPOpRppEn7NigwrvpOTDzR3vSpKGtRPyXg&usqp=CAU" alt='logo' className="navlogo"/>
                        </Link>
                        <div className="formContainer">
                            <form className="search">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                    />
                                </div>
                                <button type="button" className="search-btn" onClick={handleSubmit} >
                                    Search
                                </button>
                            </form>
                        </div>
                        
                        <Link to="/cart" className="link headerCart">
                            <img className="cartImg" src="https://cdn-icons-png.flaticon.com/512/126/126083.png" alt="cart" />
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
                        </Link>
                            {user ? <UserSidebar/>: <AuthModel/>}
                        
                    </div>
                </div>
            </header>
        </div>
    )
}

export { NavBar }