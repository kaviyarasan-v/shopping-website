import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import ProductsList from '../ProductsList/ProductsList';
import { useNavigate } from 'react-router-dom';
import ls from 'local-storage';

const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const thisProduct = ProductsList.find(prod => prod.id === id)
    const [cartValues, setCartValues] = useState(ls.get("cartList"));
    ls.set('cartList', cartValues);

    const getCart = (data) => {
        const cart = cartValues?.filter((item) => item.id === data.id)
        if (cart.length === 0) {
            setCartValues([...cartValues, data])
        }
    }
   
    return (
        <div>
            <section class="bg-light">
                <div class="container pb-5">
                    <button type="button" class="btn btn-success btn-lg mt-2" onClick={() => navigate('/')}>Back</button>
                    <div class="row">
                        <div class="col-lg-5 mt-3">
                            <div class="card mb-3">
                                <img class="card-img img-fluid" src={thisProduct.imgUrl} alt="Card image cap"
                                    id="product-detail" />
                            </div>
                        </div>
                        <div class="col-lg-7 mt-3">
                            <div class="card">
                                <div class="card-body">
                                    <h1 class="h2">{thisProduct.name}</h1>
                                    <p class="h3 py-2">${thisProduct.price}</p>
                                    <p class="py-2">
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-warning"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <span class="list-inline-item text-dark">Rating 4.8 | 36 Comments</span>
                                    </p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <h6>Brand:</h6>
                                        </li>
                                        <li class="list-inline-item">
                                            <p class="text-muted"><strong>Soft</strong></p>
                                        </li>
                                    </ul>
                                    <h6>Description:</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et
                                        dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam
                                        ultrices aliquet interdum quis nulla.</p>
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <h6>Avaliable Color :</h6>
                                        </li>
                                        <li class="list-inline-item">
                                            <p class="text-muted"><strong>White / Black</strong></p>
                                        </li>
                                    </ul>
                                    <h6>Specification:</h6>
                                    <ul class="list-unstyled pb-3">
                                        <li>Lorem ipsum dolor sit</li>
                                        <li>Amet, consectetur</li>
                                        <li>Adipiscing elit,set</li>
                                        <li>Duis aute irure</li>
                                        <li>Ut enim ad minim</li>
                                        <li>Dolore magna aliqua</li>
                                        <li>Excepteur sint</li>
                                    </ul>
                                    <form action="" method="GET">
                                        <input type="hidden" name="product-title" value="Activewear" />
                                        <div class="row">
                                            <div class="col-auto">
                                                <ul class="list-inline pb-3">
                                                    <li class="list-inline-item">Size :
                                                        <input type="hidden" name="product-size" id="product-size" value="S" />
                                                    </li>
                                                    <li class="list-inline-item"><span class="btn btn-success btn-size">S</span></li>
                                                    <li class="list-inline-item"><span class="btn btn-success btn-size">M</span></li>
                                                    <li class="list-inline-item"><span class="btn btn-success btn-size">L</span></li>
                                                    <li class="list-inline-item"><span class="btn btn-success btn-size">XL</span></li>
                                                </ul>
                                            </div>
                                            <div class="col-auto">
                                                <ul class="list-inline pb-3">
                                                    <li class="list-inline-item text-right">
                                                        Quantity
                                                        <input type="hidden" name="product-quanity" id="product-quanity" value="1" />
                                                    </li>
                                                    <li class="list-inline-item"><span class="btn btn-success" id="btn-minus">-</span></li>
                                                    <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">1</span></li>
                                                    <li class="list-inline-item"><span class="btn btn-success" id="btn-plus">+</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="row pb-3">
                                            <div class="col d-grid">
                                                <button type="button" class="btn btn-success btn-lg" name="submit" value="buy">Buy</button>
                                            </div>
                                            <div class="col d-grid">
                                                <button onClick={() => getCart(thisProduct)} type="button" class="btn btn-success btn-lg" name="submit" value="addtocard">Add To
                                                    Cart</button>
                                            </div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="departments" class="departments">
                <div class="container" data-aos="fade-up">
                    <div class="row" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-3 mb-5 ">
                            <ul class="nav nav-tabs flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                                        <p>Product description 1</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                        <p>Product description 2</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                        <p>Product description 3</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                        <p>Product description 4</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                                        <p>Product description 5</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-9">
                            <div class="tab-content">
                                <div class="tab-pane active show" id="tab-1">
                                    <h4>Product</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.</p>
                                </div>
                                <div class="tab-pane" id="tab-2">
                                    <h4>Product</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>

    )
}
export default Details;