import React, { useState } from 'react';
import ls from 'local-storage';

const Products = () => {
    const cartValuesls = ls.get("cartList");
    const overAllTotal = () => {
        return cartValuesls?.length > 0 && cartValuesls
            .reduce((acc, curr) => acc + ((Number(curr.price) || 0)), 0)
    }
    return (
        <div>
            <section class="product-detail">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-9">
                            <div class="row">
                                <div class="col-lg-12 mt-3">
                                    {cartValuesls.length > 0 ? cartValuesls.map((cartValuesls) =>
                                        <div class="detils">
                                            <img src={cartValuesls.imgUrl} class="detail-pic" />
                                            <div class="">
                                                <p class="Title">{cartValuesls.name}</p>
                                                <p class="stock">Only one stock left</p>
                                                <div class="col-auto">
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item text-right">
                                                            Quantity
                                                            <input type="hidden" name="product-quanity" id="product-quanity" value="1" />
                                                        </li>
                                                        <li class="list-inline-item"><span class="btn btn-success" id="btn-minus">-</span></li>
                                                        <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">1</span></li>
                                                        <li class="list-inline-item"><span class="btn btn-success" id="btn-plus">+</span></li>
                                                    </ul>
                                                </div>
                                                <div class="col d-grid mt-3">
                                                    <button type="buy" class="btn btn-success btn-lg" name="buy" value="addtocard">Buy</button>
                                                </div>
                                            </div>
                                            <div class="price"><span class="value">${cartValuesls.price}</span></div>
                                        </div>
                                    ) : <p class="no-data">No Data Found</p>}
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3 mt-3">
                            <div class="content">
                                <p class="Title">Total ${overAllTotal()}</p>
                                <div class="col d-grid">
                                    <button type="buy" class="btn btn-success btn-lg" name="buy" value="addtocard">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Products;