import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";

function MyOrders() {
  const context = useContext(ShoppingCartContext);
  // console.log(context.order);
  

  return (
    <Layout>
      <div className="flex items-center justify-center w-80">
      <h1 className="text-xl font-medium w-auto px-2 py-1 mb-10 rounded-lg shadow-md dark:bg-slate-900 dark:text-white dark:border-gray-700 dark:shadow-lg dark:shadow-gray-700 mt-10">
          My Orders
        </h1>
      </div>

      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
