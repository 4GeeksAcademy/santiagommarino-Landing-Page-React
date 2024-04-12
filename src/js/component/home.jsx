import React from "react";

import {Navbar} from "./navbar.jsx"
import {Jumbotron} from "./jumbotron.jsx"
import {Card} from "./cards.jsx"


//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div class="container text-center">
  <div class="row row-cols-4">
  <Card /> 
  <Card />
  <Card />
  <Card />
  </div>
</div>
				
			</div>
			
		</div>
	);
};


export default Home;
