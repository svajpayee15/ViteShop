import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  // console.log(index);
  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <div className="flex items-center justify-center w-80 relative">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1 className="flex justify-center items-center text-xl font-medium w-auto h-full px-2 py-1 mb-6 rounded-lg shadow-md dark:text-white dark:bg-slate-900 dark:shadow-lg dark:shadow-gray-700 mt-4">
          My Order
        </h1>
      </div>
      {/* My Order */}
      <div className="flex flex-col w-[360px] mt-4 text-white">
        {context.order && context.order.length > 0 ? (
          context.order?.[index]?.products.map((product) => (
            <OrderCard
              className=""
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={`₹${product.price}`}
            />
          ))
        ) : (
          <p className="flex justify-center items-center text-xl font-medium w-full h-full rounded-lg shadow-md dark:text-white dark:border-gray-700 dark:shadow-lg dark:shadow-gray-700 mt-10">
            There are no products in the order.
          </p>
        )}
        {/* Total: */}
        <div className="flex w-80 mt-4">
          <p className="flex w-full items-center">
            <span className="font-normal text-xl p-2">Total: </span>
            <span className="font-medium text-2xl">
              ₹{context.order?.[index]?.totalPrice}
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default MyOrder;

{
  /* <div className="flex flex-col w-80">
{context.order && context.order.length > 0 ? (
  context.order?.
    .slice(-1)[0]
    .products.map((product) => (
      <OrderCard
        key={product.id}
        id={product.id}
        title={product.title}
        imageUrl={product.images}
        price={product.price}
      />
    ))
) : (
  <p className="flex justify-center items-center text-xl font-medium text-gray-500 w-full h-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:shadow-lg dark:shadow-gray-700 dark mt-10">
    There are no products in the order.
  </p>
)}
</div> */
}
