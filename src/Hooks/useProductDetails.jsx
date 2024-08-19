import { useQuery } from '@tanstack/react-query';

const useProductDetails = (productId) => {
    const { data: product, isLoading, refetch } = useQuery({
      queryKey: ['product', productId],
      queryFn: async () => {
        const res = await fetch(`http://localhost:7000/allCollections/${productId}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data); // Log the data to verify it’s correct
        return data;
      },
    });
  
    return { product, refetch, isLoading };
  };

export default useProductDetails;
