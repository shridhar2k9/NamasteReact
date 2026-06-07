import { useState, useEffect } from "react";

const useProductDetail = (productId) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
      fetchProductDetails();
    }, [productId]);

    const fetchProductDetails = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };
  return { product };
}

export default useProductDetail;