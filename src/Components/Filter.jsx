// import React from 'react';

// const Filter = ({ filters, setFilters }) => {
//     const handlePriceChange = (e) => {
//         const value = e.target.value.split(',').map(Number);
//         setFilters((prev) => ({ ...prev, price: value }));
//     };

//     const handleCategoryChange = (e) => {
//         setFilters((prev) => ({ ...prev, category: e.target.value }));
//     };

//     const handleStockChange = (e) => {
//         setFilters((prev) => ({ ...prev, inStock: e.target.checked }));
//     };

//     return (
//         <aside className="filters">
//             <h3>Price Filter</h3>
//             <input
//                 type="range"
//                 min="95"
//                 max="2500"
//                 value={filters.price.join(',')}
//                 onChange={handlePriceChange}
//             />
//             <h3>Category</h3>
//             <select onChange={handleCategoryChange}>
//                 <option value="">All</option>
//                 <option value="electronics">Electronics</option>
//                 <option value="jewelery">Jewelery</option>
//                 <option value="men's clothing">Men's Clothing</option>
//                 <option value="women's clothing">Women's Clothing</option>
//             </select>
//             <h3>In Stock</h3>
//             <input
//                 type="checkbox"
//                 checked={filters.inStock}
//                 onChange={handleStockChange}
//             />
//         </aside>
//     );
// };

// export default Filter;