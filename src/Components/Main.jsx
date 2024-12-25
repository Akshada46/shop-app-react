import React from 'react'

const Main = ({ filters, setFilters }) => {
    return (
        <>
            <div style={{ marginRight: "1000px", marginTop: "60px" }}>
                <h2>Shop Grid</h2>
                <p>Home / Shop Grid</p>
            </div>
            <div className="col-md-2 col-12  picetag" style={{ marginTop: "50px", marginLeft: "150px" }}>
                <h5 htmlFor="price-range" className="form-label " style={{ marginLeft: "-70px" }}>Price Filter</h5>
                <input
                    type="range"
                    className="form-range"
                    min="10"
                    max="1000"
                    id="price-range"
                    value={filters.price[1]}
                    onChange={(e) => setFilters({ ...filters, price: [10, +e.target.value] })}
                />
            </div>
            <p style={{ position: "relative", left: "-480px" }}>${filters.price[0]} - ${filters.price[1]}
                <button className='btn btn-outline-secondary ' style={{ marginLeft: "80px" }} onClick={() => setFilters({ ...filters, price: [50, 1000] })}>Reset</button>
            </p>

            <div class="col-md-6 col-12 text-center mb-4 " style={{ position: "relative", left: "200px", marginTop: "-110px" }}>
                <div class="d-inline-block">
                    <button class="btn btn-outline-secondary" >
                        <i class="bi bi-grid"></i>
                    </button>
                    <button class="btn btn-outline-secondary ms-2">
                        <i class="bi bi-card-text"></i>
                    </button>
                    <span class="mx-2">Showing 1–14 of 26 results</span>
                </div>
            </div>
            <div class="dropdown d-inline-block " style={{ position: "relative", left: "520px", top: '-66px' }}>
                <button class="btn btn-outline-secondary dropdown-toggle" type="button"
                >
                    Default sorting
                </button>

                <button class="btn btn-dark ms-2">
                    <i class="fas fa-filter"></i> Filter
                </button>
            </div>

        </>
    )
}

export default Main;