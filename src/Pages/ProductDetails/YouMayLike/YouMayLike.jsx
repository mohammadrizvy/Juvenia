import React from "react";
import useCollection from "../../../Hooks/useCollection";

const YouMayLike = ({item}) => {
  const {  recommendedProducts } = item;

  const {data : product =[] , isLoading } = useCollection()

console.log("All of the products : ", product)



  console.log(recommendedProducts);

  return (
    <div className="my-10">
      <div className="">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          perferendis quo nemo dolorem repellendus quia quibusdam veritatis
          adipisci culpa. Non dolor architecto iusto provident aliquid, itaque
          magnam sunt odio illum.
        </p>
      </div>
    </div>
  );
};

export default YouMayLike;
