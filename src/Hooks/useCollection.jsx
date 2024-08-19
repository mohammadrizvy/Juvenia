import { useEffect, useState } from "react";

const useCollection = () => {
  const [collection, setCollections] = useState([]);
  const[loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:7000/allCollections")
      .then((res) => res.json())
      .then((data) => {
        setCollections(data);
        setLoading(false);
      });
  }, []);
  return [collection, loading];
};

export default useCollection;
