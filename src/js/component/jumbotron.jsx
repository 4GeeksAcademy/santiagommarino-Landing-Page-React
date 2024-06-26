import React from "react";


export const Jumbotron = () => {
    return (
        <div className="jumbotron-container p-3 mb-3">
            <div className="jumbotron">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
                </p>
            </div>
        </div>




    );
};

export default Jumbotron;