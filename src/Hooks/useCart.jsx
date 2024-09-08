import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const useCart = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: cart = [], isLoading, refetch } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !loading && !!user,
    queryFn: async () => {
      // console.log('Making request for user:', user?.email);
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return { cart, refetch, isLoading };
};

export default useCart;
