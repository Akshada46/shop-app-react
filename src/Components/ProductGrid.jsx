import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Categories from './Categories';


function ProductGrid({ filters }) {
    const [products, setProducts] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);



    useEffect(() => {
     
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setFilteredProducts(data);
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        // Apply price filtering based on the `filters` state
        const filtered = products.filter(
            product => product.price >= filters.price[0] && product.price <= filters.price[1]
        );
        setFilteredProducts(filtered);
    }, [filters, products]); 



    return (
        <div className="row">
            {filteredProducts.map(product => (
                <div key={product.id} className="col-md-4 mb-4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;
