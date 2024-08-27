import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  
  const [axiosSecure] = useAxiosSecure(); 

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(data)

  return { data, error, isLoading, isError };
};

export default useUser;
