import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body">
            <div class="container-fluid">
                <div className='row w-100 justify-content-center'>
                    <div className='col-8 d-flex flex-row justify-content-between'>
                        <div>
                            <h3 id='header-title'>Start Bootstrap</h3>
                        </div>
                        <div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Services</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;