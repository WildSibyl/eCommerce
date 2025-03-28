import { useState, useEffect } from "react";    

export const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [category, setCategory] = useState("all");
    // const [search, setSearch] = useState("");
    // const [sort, setSort] = useState("price-asc");
    // const [filteredProducts, setFilteredProducts] = useState([]);
    // const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.in/api/products");
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [])

    return products
};

export const useProduct = (productId) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.in/api/products/${productId}`);
          const data = await response.json();
          setProduct(data.product);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
      };
  
      fetchProduct();
    }, [productId]);
  
    return { product, loading, error };
};
  

export const useCategory = (productCategory) => {
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.in/api/products/category?type=${productCategory}`);
                const data = await response.json();
                setCategory(data.products);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchCategory();
    }, [productCategory])
    
    return category
};