import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCollection = () => {
  const [axiosSecure] = useAxiosSecure(); // Destructure axiosSecure correctly

  const { data, isLoading, refetch, error } = useQuery({
    queryKey: ['collections'],
    queryFn: async () => {
      const res = await axiosSecure.get('/allCollections'); // Use axiosSecure correctly
      return res.data;
    },
  });

  console.log('Fetched Data:', data);

  return { data, refetch, isLoading, error };
};

export default useCollection;