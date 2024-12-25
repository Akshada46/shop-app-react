import React from "react";

const TopHeader = () => {
    return (
        <header className="bg-light py-3 ">
            <div className="container " style={{ height: "40px" }}>
                <div className="d-flex justify-content-between align-items-center p-2 bg-light ">

                    <div className="d-flex align-items-center">
                        <div>
                            <i className="bi bi-facebook text-primary fs-5 me-2"></i>
                            <span >7500k Followers</span>
                        </div>
                        <div>
                            <i className="bi bi-telephone-fill text-primary fs-5 ms-4"></i>
                            <span>+1 (402) 763 282 46</span>
                        </div>
                    </div>


                    {/* <div className="d-flex align-items-center">
                        <i className="bi bi-telephone-fill text-primary fs-5 me-2"></i>
                        <span>+1 (402) 763 282 46</span>
                    </div> */}


                    <div className="d-flex align-items-center">

                        <select className="form-select me-2" style={{ width: "100px",border:"none" }}>
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                        </select>


                        <select className="form-select me-2" style={{ width: "100px",border:"none" }}>
                            <option value="USD">$ USD</option>
                            <option value="EUR">€ EUR</option>
                            <option value="INR">₹ INR</option>
                        </select>

                        {/* Settings Dropdown */}
                        <div className="dropdown">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="settingsDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                
                            >
                                Settings
                            </button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopHeader;