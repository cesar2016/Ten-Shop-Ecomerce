import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";


function Cart() {

    // var todosLosProductos = products.concat(searchProducts);
    // var resultado = todosLosProductos.find((el) => {
    //   if (el.id == id) {
    //     return el
    //   }
    // })


    return (

        <div className="container">



            <section class="blog-block">
                <div class="container">
                    <div class="row offspace-45">
                        <div class="view-set-block">
                            <div class="col-md-8 col-sm-8 col-xs-12">
                                <div class="event-blog-image">
                                    <table class="table">
                                        <thead>
                                            <tr align={'center'}>
                                                <h2>Shopping Cart <i className={"fa fa-shopping-cart"}></i></h2>


                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th width={'30%'}>
                                                    <div class="text-center">
                                                        <img width={'150'} src="https://axa.com.ar/webaxa/18014-home_default/notebook-lenovo-ideapad-s145-15iil-intel-core-i3-4gb-ram-1tb-156-10-generacion.jpg" class="rounded" alt="..." />
                                                    </div>

                                                </th>
                                                <td width={'50%'} >
                                                    <p>
                                                        <h4><a>NAME PRODUCT</a></h4>
                                                    </p>
                                                    <p>
                                                        <div class="event-blog-details">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Nunc lorem nulla, ornare eu felis quis, efficitur posuere nulla. Aliquam ac luctus
                                                    </p>
                                                        </div>
                                                    </p>
                                                    <h3><strong>$ 5800</strong></h3>
                                                </td>
                                                <td width={'20%'}>
                                                    <div class="col-auto">
                                                        <label class="sr-only" for="inlineFormInput">Name</label>
                                                        <input type="number" class="form-control mb-2 mt-5" id="inlineFormInput" placeholder="Amount" />
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12 side-in-image">
                                <div class="event-blog-details">

                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <h2>Sumary <i className={"fa fa-calculator"}></i></h2>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <p>
                                                        <div class="event-blog-details">
                                                            <p>SubTotal</p>
                                                            <p>Shipping</p>
                                                            <p>Taxes</p>
                                                        </div>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p>
                                                        <div class="event-blog-details">
                                                            <p>300</p>
                                                            <p>Free</p>
                                                            <p>25</p>
                                                        </div>
                                                    </p>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <p>
                                                        <div class="event-blog-details">
                                                            <h3>Total</h3>
                                                        </div>
                                                    </p>
                                                </th>
                                                <th>
                                                    <p>
                                                        <div class="event-blog-details">
                                                            <h3><strong>$ 325</strong></h3>
                                                        </div>
                                                    </p>
                                                </th>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>







        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.all_products,
        searchProducts: state.search_result
    }
}



export default connect(mapStateToProps)(Cart)