import React, { Component } from 'react';
import Image from 'react-image-resizer';
import { Link } from "react-router-dom";

class Research extends Component {
	render() {
		return (
				<div className='container'>
					<h1>Research</h1>
					<h2>What would you like to learn about today?</h2>

					<div className="ResearchOptions">
						<a href="research/3dmodeling">
							<img src={'../images/research/icon3d.jpg'} height={250} width={250}/>
							<h3>3D Modeling</h3>
						</a>

						<div>
							<img src={'../images/research/iconcardiac.jpg'} height={250} width={250}/>
							<h3>Cardiac</h3>
						</div>

						<div>
							<img src={'../images/research/iconhealth.jpg'} height={250} width={250}/>
							<h3>Patient Care</h3>
						</div>

						<div>
							<img src={'../images/research/iconbear.jpg'} height={250} width={250}/>
							<h3>Black Bears</h3>
						</div>

						<div>
							<img src={'../images/research/icondevice.jpg'} height={250} width={250}/>
							<h3>Medical Devices</h3>
						</div>

						<div>
							<img src={'../images/research/iconsm.png'} height={250} width={250}/>
							<h3>Skeletal Muscle</h3>
						</div>
					</div>
				</div>
			);
	}
}

export default Research;