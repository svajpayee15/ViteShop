import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  const currentDate = () => {
    const date = new Date().toLocaleDateString();
    return date
 }

  return (
    <div className="flex justify-between items-center mb-4 border border-white text-white border-b-4 w-80 p-4 rounded-lg">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-medium">{currentDate()}</span>
          <span className="font-medium">{totalProducts} {totalProducts === 1 ? 'article' : 'articles'} </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-white cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
