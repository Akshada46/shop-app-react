import React from 'react';

function ProductCard({ product }) {
    return (
        <div className="card" style={{borderRadius:"20px"}}>
            <img src={product.image} style={{ width: "150px",margin:"60px" }} className="card-img-top" alt={product.title} />
            <div className="card-body">
                <p className="card-title">{product.title}</p>
                <h5 className="card-text">${product.price}</h5>
                <p className="card-text">Rating: {product.rating?.rate } ⭐⭐⭐</p>
                {/* <button className="btn btn-primary">Quick View</button> */}
            </div>
        </div>
    );
}

export default ProductCard;
