import './product.css'
import { useEffect, useState } from "react"
import { FakeStoreApi } from '../../services/fake-store-api'
import { Link, useParams } from "react-router-dom"
import { useCart } from "../../context/cart"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
const Product = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const { productId } = useParams();
    const { user,addToCart,handleOpen,setAlert } = useCart()

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            const product = await FakeStoreApi.fetchProductById(productId);
            
            setProduct(product);
            setLoading(false);
        }
        fetchProduct().catch(console.error)
    }, [productId])

    if (!loading && !product) {
        return (
            <div className="container">
                <div className="product py-2">
                    <div className="details p-3">
                        Product not found. Please visit{" "}
                        <Link to="/" replace>
                            home
                        </Link>{" "}
                        to see all available products
                    </div>
                </div>
            </div>
        )
    }
    console.log(product?.images)

    return (
        <div className="container">
            {loading ? (
                <div className={"loader"}></div>
            ) : (
              <div className='parentContainer'>
                <div className='singleLeftContainer'>
                <Carousel className='car'
                
            showThumbs={false}
            autoPlay={true}
            transitionTime={1}
            infiniteLoop={true}
            showStatus={false}
                >
                        {
                        
                        product?.images?.map((item, index) => (
                            <div key={index} className='carousel'>
                                <img src={item} alt={`Product ${index}`} />
                            </div>
                        ))}
                </Carousel>
                </div>
                <div className='singleRightContainer'>
                        <div>
                            <h3 className='ProdTitle'>{product.title}</h3>
                        </div>
                        <div className='rating'>
                            {
                                [...new Array(5)].map((item,index)=>{
                                    return (<span className={index+1 <= Math.floor(product.rating) ? 'rate selected' : 'rate'}></span>)
                                })
                            }
                            <span className='ratingSingle'>({Math.floor(product.rating)})</span>
                        </div>
                        <div>
                            <p className='singleDescription'>{product.description}</p>
                        </div>
                        <span style={{color:'green'}}>SELECT COLORS</span>
                        <div className='colorContainer'>
                            <div className='prodColor1'></div>
                            <div className='prodColor2'></div>
                            <div className='prodColor3'></div>
                            <div className='prodColor'></div>
                        </div>
                        <div className="flex1">
                                <h4 className="disc"><span className="price">${product.price}</span> <span className='before1'>${Math.round((product.price/100)*product.discountPercentage)+product.price}</span><span className="discount">{Math.round(product.discountPercentage)}% off</span></h4>
                                
                               
                                <span className="cart" onClick={() => {
                                    //  user ? addToCart(product) : handleOpen()

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
                                }}>
                                    <img src="https://cdn-icons-png.flaticon.com/512/126/126083.png" alt="logo" />
                                </span>
                        </div>
                     
                </div>
              </div>
            )}
        </div>
    )
}

export { Product }