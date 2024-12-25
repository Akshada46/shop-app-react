import React from 'react';

function ProductCard({ product }) {
    return (
        
        <div>
            <div className="card" style={{ backgroundColor: "#F5F5F5",height:"300px" ,width:"280px",marginTop:"-30px"}}>
                <img src={product.image} style={{ width: "150px",height:"200px", margin: "60px", }} className="card-img-top" alt={product.title} />


            </div>
            <div className="card-body">
                <p className="card-title">{product.title}</p>
                <h5 className="card-text">${product.price}</h5>
                <p className="card-text">Rating: {product.rating?.rate} ⭐⭐⭐</p>
            </div>
        </div>
    );
}

export default ProductCard;
