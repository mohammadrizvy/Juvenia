import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  
  const { data: isAdmin, isLoading: isAdminLoading, isError, error } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      if (!user?.email) {
        return false; // Return false if no user email
      }
      const token = localStorage.getItem('access-token'); // Retrieve token
      if (!token) {
        throw new Error('No access token available');
      }
      try {
        const res = await axiosSecure.get(`/users/admin/${user.email}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return res.data.admin;
      } catch (err) {
        throw new Error('Error fetching admin status');
      }
    },
    enabled: !!user?.email, // Only run the query if user email is available
    retry: 1, // Retry only once on failure
    onError: (error) => {
      console.error('Error fetching admin status:', error);
    }
  });
  
  return [isAdmin, isAdminLoading, isError, error];
};

export default useAdmin;
