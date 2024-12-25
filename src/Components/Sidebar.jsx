import React from 'react';

function Sidebar({ filters, setFilters }) {
  const categories = ['Leather', 'Classic Watch', "Leather Man Watch", 'Trending Watch', 'Google', 'Womans Watch', 'Tables', 'ShopEngine'];
  const colors = ['Red', 'Dark Blue'];

  return (
    <div>
      {/* <h4>Price Filter</h4>
      <input
        className='color-info'
        type="range"
        min="10"
        max="1000"
        value={filters.price[1]}
        onChange={(e) => setFilters({ ...filters, price: [10, +e.target.value] })}
      />
      <p>${filters.price[0]} - ${filters.price[1]} <button className='btn 11`' style={{ border: "none" }} onClick={() => setFilters({ ...filters, price: [50, 1000] })}>Reset</button></p> */}

      <h4 className='mt-5'>Product Status</h4>
      <hr />
      <div>
        <input
          type="checkbox"
          checked={filters.onSale || false}
          onChange={(e) => setFilters({ ...filters, onSale: e.target.checked })}
        /> On Sale
        <br />
        <input
          type="checkbox"
          checked={filters.inStock || false}
          onChange={(e) => setFilters({ ...filters, inStock: e.target.checked })}
        /> In Stock
      </div>


      <h4 className='mt-4'>Categories</h4>
      <hr />
      <ul>
        {categories.map((category) => (
          <p key={category}>
            {category}
          </p>
        ))}
      </ul>

      <h4>Filter by Color</h4>
      <ul>
        {colors.map((color) => (
          <p key={color}>
            {color}
          </p>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
