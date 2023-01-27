import React from 'react'
import star from '../imgs/template/icons/star.svg'
const Whishlist = (props) => {
  const {styleClass}=props
  return (
    <div class={styleClass} id="tab-wishlist" role="tabpanel" aria-labelledby="tab-wishlist">
    <div class="box-wishlist">
      <div class="head-wishlist">
        <div class="item-wishlist">
          <div class="wishlist-cb">
            <input class="cb-layout cb-all" type="checkbox" />
          </div>
          <div class="wishlist-product"><span class="font-md-bold color-brand-3">Product</span></div>
          <div class="wishlist-price"><span class="font-md-bold color-brand-3">Price</span></div>
          <div class="wishlist-status"><span class="font-md-bold color-brand-3">Stock status</span></div>
          <div class="wishlist-action"><span class="font-md-bold color-brand-3">Action</span></div>
          <div class="wishlist-remove"><span class="font-md-bold color-brand-3">Remove</span></div>
        </div>
      </div>
      <div class="content-wishlist">
        <div class="item-wishlist">
          <div class="wishlist-cb">
            <input class="cb-layout cb-select" type="checkbox" />
          </div>
          <div class="wishlist-product">
            <div class="product-wishlist">
              <div class="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub.png" alt="Ecom"/></a></div>
              <div class="product-info"><a href="shop-single-product.html">
                  <h6 class="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div class="wishlist-price">
            <h4 class="color-brand-3">$2.51</h4>
          </div>
          <div class="wishlist-status"><span class="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div class="wishlist-action"><a class="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div class="wishlist-remove"><a class="btn btn-delete" href="#"></a></div>
        </div>
        <div class="item-wishlist">
          <div class="wishlist-cb">
            <input class="cb-layout cb-select" type="checkbox" />
          </div>
          <div class="wishlist-product">
            <div class="product-wishlist">
              <div class="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub2.png" alt="Ecom"/></a></div>
              <div class="product-info"><a href="shop-single-product.html">
                  <h6 class="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div class="wishlist-price">
            <h4 class="color-brand-3">$1.51</h4>
          </div>
          <div class="wishlist-status"><span class="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div class="wishlist-action"><a class="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div class="wishlist-remove"><a class="btn btn-delete" href="#"></a></div>
        </div>
        <div class="item-wishlist">
          <div class="wishlist-cb">
            <input class="cb-layout cb-select" type="checkbox" />
          </div>
          <div class="wishlist-product">
            <div class="product-wishlist">
              <div class="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub3.png" alt="Ecom"/></a></div>
              <div class="product-info"><a href="shop-single-product.html">
                  <h6 class="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div class="wishlist-price">
            <h4 class="color-brand-3">$3.51</h4>
          </div>
          <div class="wishlist-status"><span class="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div class="wishlist-action"><a class="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div class="wishlist-remove"><a class="btn btn-delete" href="#"></a></div>
        </div>
        <div class="item-wishlist">
          <div class="wishlist-cb">
            <input class="cb-layout cb-select" type="checkbox" />
          </div>
          <div class="wishlist-product">
            <div class="product-wishlist">
              <div class="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub4.png" alt="Ecom"/></a></div>
              <div class="product-info"><a href="shop-single-product.html">
                  <h6 class="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div class="wishlist-price">
            <h4 class="color-brand-3">$4.51</h4>
          </div>
          <div class="wishlist-status"><span class="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div class="wishlist-action"><a class="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div class="wishlist-remove"><a class="btn btn-delete" href="#"></a></div>
        </div>
        <div class="item-wishlist">
          <div class="wishlist-cb">
            <input class="cb-layout cb-select" type="checkbox" />
          </div>
          <div class="wishlist-product">
            <div class="product-wishlist">
              <div class="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub5.png" alt="Ecom"/></a></div>
              <div class="product-info"><a href="shop-single-product.html">
                  <h6 class="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div class="wishlist-price">
            <h4 class="color-brand-3">$3.51</h4>
          </div>
          <div class="wishlist-status"><span class="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div class="wishlist-action"><a class="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div class="wishlist-remove"><a class="btn btn-delete" href="#"></a></div>
        </div>
        <div class="item-wishlist">
          <div class="wishlist-cb">
            <input class="cb-layout cb-select" type="checkbox" />
          </div>
          <div class="wishlist-product">
            <div class="product-wishlist">
              <div class="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub.png" alt="Ecom"/></a></div>
              <div class="product-info"><a href="shop-single-product.html">
                  <h6 class="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div class="wishlist-price">
            <h4 class="color-brand-3">$2.51</h4>
          </div>
          <div class="wishlist-status"><span class="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div class="wishlist-action"><a class="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div class="wishlist-remove"><a class="btn btn-delete" href="#"></a></div>
        </div>
        <div class="item-wishlist">
          <div class="wishlist-cb">
            <input class="cb-layout cb-select" type="checkbox" />
          </div>
          <div class="wishlist-product">
            <div class="product-wishlist">
              <div class="product-image"><a href="shop-single-product.html"><img src="assets/imgs/page/product/img-sub2.png" alt="Ecom"/></a></div>
              <div class="product-info"><a href="shop-single-product.html">
                  <h6 class="color-brand-3">Samsung 36&quot; French door 28 cu. ft. Smart Energy Star Refrigerator </h6></a>
                <div class="rating"><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><img src={star} alt="Ecom"/><span class="font-xs color-gray-500"> (65)</span></div>
              </div>
            </div>
          </div>
          <div class="wishlist-price">
            <h4 class="color-brand-3">$1.51</h4>
          </div>
          <div class="wishlist-status"><span class="btn btn-gray font-md-bold color-brand-3">In Stock</span></div>
          <div class="wishlist-action"><a class="btn btn-cart font-sm-bold" href="shop-cart.html">Add to Cart</a></div>
          <div class="wishlist-remove"><a class="btn btn-delete" href="#"></a></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Whishlist