import ProductImage from "./ProductImage";

const OrderSummaryCard = ({ orderData, orderItems, orderId }) => {
  if (!orderData || !orderItems) return null;

  return (
    <div className="flex flex-col md:flex-row mt-2 mb-4 border border-base-100 rounded-2xl bg-base-200">
      <div className="p-4 pl-6 pb-5 w-full">
        <p className="text-xl mb-4 font-semibold"># {orderId}</p>
        {orderData?.userId === null && (
          <p className="mb-4 text-center font-bold bg-error text-error-content rounded-lg px-3 py-2">
            You are not logged in! Please save your order number for future
            reference.
          </p>
        )}
        {orderItems.map((item) =>
          item.product ? (
            <div
              key={item.productId}
              className="order-item flex items-center gap-4 mb-4"
            >
              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                <ProductImage product={item.product} />
              </div>
              <div>
                <h4 className="font-semibold max-w-100 line-clamp-1">
                  {item.product.title}
                </h4>
                <p>x{item.quantity}</p>
                <p>
                  €{" "}
                  {item.product.discount > 0
                    ? (
                        (item.product.price -
                          item.product.price * (item.product.discount / 100)) *
                        item.quantity
                      ).toFixed(2)
                    : (item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ) : (
            <div key={item.productId}>
              <p>Product not found (ID: {item.productId})</p>
            </div>
          )
        )}
        {orderData.discountCode && (
          <div className="flex">
            <p className="w-28 flex-shrink-0">Discount:</p>
            <p>{orderData.discountCode}</p>
          </div>
        )}
        <div className="flex">
          <p className="w-28 flex-shrink-0">Shipping:</p>
          <p>€ {orderData.fee}</p>
        </div>
        <div className="flex">
          <p className="w-28 flex-shrink-0 font-semibold">Total:</p>
          <p className="font-semibold">€ {orderData.total / 100}</p>
        </div>
      </div>

      <div className="p-4 pl-6 pb-5 border-base-100 border-t md:border-t-0 md:border-l min-w-50">
        <h2 className="text-xl font-semibold mb-2">Shipping to:</h2>
        <div>{orderData.shipping.name}</div>
        <div>{orderData.shipping.street}</div>
        <div>
          {orderData.shipping.zip}, {orderData.shipping.city}
        </div>
        <div>({orderData.shipping.state})</div>
        <div>{orderData.shipping.country}</div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
