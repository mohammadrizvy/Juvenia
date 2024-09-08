import React from "react";
import useCollection from "../../../Hooks/useCollection";
import { Link } from "react-router-dom";

const YouMayLike = ({ item }) => {
  const { recommendedProducts } = item;

  // Fetch all products from the collection
  const { data: products = [], isLoading } = useCollection();

  // Filter products based on the recommendedProducts array
  const filteredProducts = products.filter((product) =>
    recommendedProducts.includes(product._id)
  );

  console.log("Filtered Recommended Products: ", filteredProducts);

  return (
    <div className="my-10 bg-black p-14">
      <h2 className="text-3xl font-bold text-white mb-3">You may also like</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link to={`/product-details/${product._id}`} key={product._id}>
                <div className="p-4 text-white border">
                  <img
                    src={product.imageUrl}
                    alt={product.productName}
                    className="w-full h-48 object-cover"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {product.productName}
                  </h3>
                  <p>{product.category}</p>
                  <p className="font-bold">{product.price} BDT</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No recommended products available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default YouMayLike;
