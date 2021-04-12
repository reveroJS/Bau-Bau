import "./MyOrders.css";

const MyOrders = ({
    orderNumber,
    productName,

}) => {

    return (
        <div className="data" >
            <h2>{productName}</h2>
            <h4>Order Number: {orderNumber}</h4>
            <p>When your order is ready, we will call you to discuss the time of the delivery.</p>
        </div >
    );
}
export default MyOrders;