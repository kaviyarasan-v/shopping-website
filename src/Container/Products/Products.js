import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductsList from '../ProductsList/ProductsList';
import ls from 'local-storage';

const Products = () => {
    const navigate = useNavigate();
    const productList = ProductsList;
    // ls.set('cartList', []);
    const [cartValues, setCartValues] = useState(ls.get("cartList") || []);
    ls.set('cartList', cartValues);

    const getCart = (data) => {
        const cart = cartValues?.filter((item) => item.id === data.id)
        if (cart.length === 0) {
            setCartValues([...cartValues, data])
        }
    }
    return (
        <div>
            <section id="innerpage" class="innerpage inventoryPage">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12  col-md-12 col-sm-12 innerRight">
                            <div class="row">
                                {productList.map((productList) =>
                                    <div class="item inventoryBlock col-lg-4 col-md-6 col-sm-6" >
                                        <div class="card" >
                                            <img src={productList.imgUrl} class="card-img-top" alt="..." onClick={() => navigate(`/details/${productList.id}`)} />
                                            <div class="card-body">
                                                <p class="card-text">Get free delivery</p>
                                                <p class="offer">50% Offer</p>
                                                <div class="card-amount-sec">
                                                    <div class="price"><b>${productList.price}</b></div>
                                                    <a class="btn btn-primary" onClick={() => getCart(productList)}>Add To Cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Products;