import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Categories from './Categories';


function ProductGrid({ filters, searchQuery }) {
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
        let filtered = products;
        if (filters.price) {
            filtered = filtered.filter(
                (product) => product.price >= filters.price[0] && product.price <= filters.price[1]
            );
        }
        if (searchQuery) {
            filtered = filtered.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        setFilteredProducts(filtered);
    }, [filters, searchQuery, products]);



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
