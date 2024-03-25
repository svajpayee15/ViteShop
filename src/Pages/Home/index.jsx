import { useContext } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const context = useContext(ShoppingCartContext);

  const renderView = () => {
      if (context.filteredItems?.length > 0) {   // Check if there are filtered items 
        return (
          context.filteredItems?.map(item => (  // Map through filtered items and create Card components 
            <Card key={item.id} data={item} />
          ))
        )
      } else {  // No filtered items found 
        return (
          <div className="col-span-4 flex justify-center">
            <p>No Results Found</p>
          </div>
        )
      }
  };

  return (
    <Layout>
      <h1 className="flex justify-center items-center text-xl font-medium w-auto h-full px-2 py-1 mb-6 rounded-lg shadow-md dark:text-white dark:bg-slate-900 dark:shadow-lg dark:shadow-gray-700 mt-4">
        Exclusive Products
      </h1>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none"
        onChange={(e) => context.setSearchByTitle(e.target.value)}
      />
      <div className="grid gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
