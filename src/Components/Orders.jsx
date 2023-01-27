import React from 'react'

const Orders = (props) => {
  const {styleClass}=props
  return (
    <div class={styleClass} id="tab-orders" role="tabpanel" aria-labelledby="tab-orders">
    <div class="box-orders">
      <div class="head-orders">
        <div class="head-left">
          <h5 class="mr-20">Order ID: #EWFDSAF1321655</h5><span class="font-md color-brand-3 mr-20">Date: 18 September 2022</span><span class="label-delivery">Delivery in progress</span>
        </div>
        <div class="head-right"><a class="btn btn-buy font-sm-bold w-auto">View Order</a></div>
      </div>
      <div class="body-orders">
        <div class="list-orders">
          <div class="item-orders">
            <div class="image-orders"><img src="assets/imgs/page/account/img-1.png" alt="Ecom"/></div>
            <div class="info-orders">
              <h5>Samsung 36" French door 28 cu. ft. Smart Energy Star Refrigerator</h5>
            </div>
            <div class="quantity-orders">
              <h5>Quantity: 01</h5>
            </div>
            <div class="price-orders">
              <h3>$2.51</h3>
            </div>
          </div>
          <div class="item-orders">
            <div class="image-orders"><img src="assets/imgs/page/account/img-1.png" alt="Ecom"/></div>
            <div class="info-orders">
              <h5>Samsung 36" French door 28 cu. ft. Smart Energy Star Refrigerator</h5>
            </div>
            <div class="quantity-orders">
              <h5>Quantity: 01</h5>
            </div>
            <div class="price-orders">
              <h3>$2.51</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-orders">
      <div class="head-orders">
        <div class="head-left">
          <h5 class="mr-20">Order ID: #EWFDSAF1321655</h5><span class="font-md color-brand-3 mr-20">Date: 18 September 2022</span><span class="label-delivery label-delivered">Delivered</span>
        </div>
        <div class="head-right"><a class="btn btn-buy font-sm-bold w-auto">View Order</a></div>
      </div>
      <div class="body-orders">
        <div class="list-orders">
          <div class="item-orders">
            <div class="image-orders"><img src="assets/imgs/page/account/img-1.png" alt="Ecom"/></div>
            <div class="info-orders">
              <h5>Samsung 36" French door 28 cu. ft. Smart Energy Star Refrigerator</h5>
            </div>
            <div class="quantity-orders">
              <h5>Quantity: 01</h5>
            </div>
            <div class="price-orders">
              <h3>$2.51</h3>
            </div>
          </div>
          <div class="item-orders">
            <div class="image-orders"><img src="assets/imgs/page/account/img-1.png" alt="Ecom"/></div>
            <div class="info-orders">
              <h5>Samsung 36" French door 28 cu. ft. Smart Energy Star Refrigerator</h5>
            </div>
            <div class="quantity-orders">
              <h5>Quantity: 01</h5>
            </div>
            <div class="price-orders">
              <h3>$2.51</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box-orders">
      <div class="head-orders">
        <div class="head-left">
          <h5 class="mr-20">Order ID: #EWFDSAF1321655</h5><span class="font-md color-brand-3 mr-20">Date: 18 September 2022</span><span class="label-delivery label-cancel">Cancel</span>
        </div>
        <div class="head-right"><a class="btn btn-buy font-sm-bold w-auto">View Order</a></div>
      </div>
      <div class="body-orders">
        <div class="list-orders">
          <div class="item-orders">
            <div class="image-orders"><img src="assets/imgs/page/product/ss.jpg" alt="Ecom"/></div>
            <div class="info-orders">
              <h5>Samsung 36" French door 28 cu. ft. Smart Energy Star Refrigerator</h5>
            </div>
            <div class="quantity-orders">
              <h5>Quantity: 01</h5>
            </div>
            <div class="price-orders">
              <h3>$2.51</h3>
            </div>
          </div>
          <div class="item-orders">
            <div class="image-orders"><img src="assets/imgs/page/product/ss2.jpg" alt="Ecom"/></div>
            <div class="info-orders">
              <h5>Samsung 36" French door 28 cu. ft. Smart Energy Star Refrigerator</h5>
            </div>
            <div class="quantity-orders">
              <h5>Quantity: 01</h5>
            </div>
            <div class="price-orders">
              <h3>$2.51</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <ul class="pagination">
        <li class="page-item"><a class="page-link page-prev" href="#"></a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link active" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">4</a></li>
        <li class="page-item"><a class="page-link" href="#">5</a></li>
        <li class="page-item"><a class="page-link" href="#">6</a></li>
        <li class="page-item"><a class="page-link page-next" href="#"></a></li>
      </ul>
    </nav>
  </div>
  )
}

export default Orders