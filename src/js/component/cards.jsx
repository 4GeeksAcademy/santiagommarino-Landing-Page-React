import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
export const Card = () => {
	return (
  <div class="col">
    <div class="card">
      <img src={rigoImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
        <button type="button" class="btn btn-primary ">Find out more</button>
      </div>
    </div>
  </div>

    )
};

export default Card;