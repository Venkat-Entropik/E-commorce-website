import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { useSearchParams } from "react-router-dom"
import { Item } from "../../components/item"
import { useCart } from "../../context/cart"
import Pagination from '@mui/material/Pagination'
import './products.css'


const Products = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [query] = useSearchParams();
    const { user,addToCart,handleOpen,setAlert } = useCart()
    const[pages,setPages]=useState(1)
    const searchQuery = query.get('q');

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const products = searchQuery ? await FakeStoreApi.fetchProductsBySearchQuery(searchQuery) : await FakeStoreApi.fetchAllProducts();
                console.log('products',products);
            setProducts(products.products);
            setLoading(false)
        }
        fetchProducts().catch(console.error)
    }, [searchQuery])

    if (!loading && searchQuery && !products.length) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">No products found matching your query.</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container">
                <div className="products my-5">
                    <div className="grid">
                        {loading ? (
                            <div className="loader" />
                        ) : (
                            products.slice(pages*10-10,pages*10+10).map((product) => (
                                <Item key={product.id} data={product} addToCart={() => {
                                    // user ? addToCart(product) : handleOpen()
                                    if(user){
                                        addToCart(product)
                                        setAlert({
                                            open:true,
                                            message:`${product.title} Added To Cart`,
                                            type:'success'
                                        })
                                    }else{
                                        handleOpen()
                                    }
                                }} />
                            ))
                        )}
                    </div>
                </div>
                <div className="divContainer">
                <Pagination className="pageCenter" count={products.length/10} color="primary" onChange={(e,p)=>{
                    setPages(p);
                    
                }}/>
                </div>
              
            </div>
        </>
    )
}

export { Products }