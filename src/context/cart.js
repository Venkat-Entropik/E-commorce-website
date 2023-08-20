import { onAuthStateChanged } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../firebase"
import React from "react"
const initialState = {
    cart: [],
    cartItemCount: () => 0,
    addToCart: () => null,
    removeFromCart: () => null,
    increaseQuantity: () => null,
    decreaseQuantity: () => null,
}

const CartContext = createContext(initialState)

const useCart = () => useContext(CartContext)



const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(initialState.cart)
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");
    const[user,setUser]=useState(null)
    const[alert,setAlert]=useState({
        open:false,
        message:'' ,
        type:'success',
    })

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user) setUser(user)
            else setUser(null)
        })
    },[])
    const cartItemCount = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const addToCart = (product) => {
        const productIdx = cart.findIndex((item) => item.product.id === product.id)
        if (productIdx !== -1) {
            increaseQuantity(product.id)
        } else {
            setCart([...cart, { product, quantity: 1 }])
        }
    }

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.product.id !== productId))
    }

    const increaseQuantity = (productId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product.id === productId)
        if (productIdx !== -1) {
            copy[productIdx].quantity += 1
            setCart(copy)
        }
    }

    const decreaseQuantity = (productId) => {
        const copy = cart.slice()
        const productIdx = copy.findIndex((item) => item.product.id === productId)
        if (productIdx !== -1 && copy[productIdx].quantity > 1) {
            copy[productIdx].quantity -= 1
            setCart(copy)
        }
    }

    return (
        <CartContext.Provider
            value={{ cart, cartItemCount, addToCart, removeFromCart, increaseQuantity, decreaseQuantity,alert,setAlert,user,handleOpen,handleClose,open,value, setValue }}
        >
            {children}
        </CartContext.Provider>
    )
}

export { useCart, CartProvider }