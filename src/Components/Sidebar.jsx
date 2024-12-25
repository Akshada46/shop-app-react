import React from 'react';

function Sidebar({ filters, setFilters }) {
  const categories = [{ name: 'Leather', quantity: 10 },
  { name: 'Classic Watch', quantity: 8 },
  { name: "Leather Man Watch", quantity: 6 },
  { name: 'Trending Watch', quantity: 5 },
  { name: 'Womans Watch', quantity: 4 },
  { name: 'Tables', quantity: 7 },
  { name: 'ShopEngine', quantity: 10 }];
  const colors = [{ color: 'Red', quantity: 10 }, { color: 'Dark Blue', quantity: 8 }];

  return (
    <div>

      <h5 className='mt-2 ' style={{ marginLeft: "-40px" }}>Product Status</h5>
      <hr />
      <div className='mt-3' style={{ textAlign: "left" }}>
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


      <h5 style={{ marginLeft: "-70px", marginTop: "30px" }}>Categories</h5>
      <hr />

      <ul  >
        {categories.map((category) => (
          <li>
            <div style={{ display: "flex", justifyContent: "space-between" }} key={category}>
              <p style={{ textAlign: "left" }}>  {category.name}</p>
              <div style={{
                borderRadius: "5px",
                border: "1px solid black",
                width: "30px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                {category.quantity}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <h5>Filter by Color</h5>
      <hr />

      <div style={{ textAlign: "center" }}>
        {colors.map((color) => (
          <div style={{ display: "flex", justifyContent: "space-between", textAlign: "right" }} key={color}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input style={{ marginRight: "8px" }} type="radio" />

              <p style={{ margin: "0" }}>  {color.color}</p>
            </div>
            <div style={{
              borderRadius: "5px",
              border: "1px solid black",
              width: "30px",
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              {color.quantity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
