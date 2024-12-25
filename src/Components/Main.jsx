import React from 'react'

const Main = ({ filters, setFilters }) => {
    return (
        <>
            <div className='mt-4' style={{ marginRight: "1000px" }}>
                <h2>Shop Grid</h2>
                <p>Home / Shop Grid</p>
            </div>
            {/* <div className='mt-4 picetag' style={{ marginRight: "1000px" }}>
                <h4>Price Filter</h4>
                <input
                    type="range"
                    min="10"
                    max="1000"
                    value={filters.price[1]}
                    onChange={(e) => setFilters({ ...filters, price: [10, +e.target.value] })}
                />
            </div> */}
            <div class="col-md-3 col-12 mb-4 picetag">
                <label for="price-range" class="form-label">Price Filter</label>
                <input type="range" class="form-range"  min="10"
                    max="1000" id="price-range" value="50" />
                <div class="d-flex justify-content-between align-items-center">
                    <span>$95 - $2500</span>
                    <button class="btn btn-outline-secondary btn-sm ms-2">Reset</button>
                </div>
            </div>

            <p style={{ position: "relative", left: "-500px" }}>${filters.price[0]} - ${filters.price[1]} <button className='btn btn-outline-secondary ms-4' onClick={() => setFilters({ ...filters, price: [50, 1000] })}>Reset</button></p>
            <div class="col-md-6 col-12 text-center mb-4 " style={{ position: "relative", left: "200px", marginTop: "-30px" }}>
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
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="sortingDropdown"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Default sorting
                </button>
                {/* <ul class="dropdown-menu" aria-labelledby="sortingDropdown">
                    <li><a class="dropdown-item" href="#">Sort by price</a></li>
                    <li><a class="dropdown-item" href="#">Sort by popularity</a></li>
                </ul> */}
                <button class="btn btn-dark ms-2">
                    <i class="fas fa-filter"></i> Filter
                </button>
            </div>

        </>
    )
}

export default Main;