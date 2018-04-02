import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
	render() {
		return (
				<div className='FootContainer'>
					<div className='yellow-footer-bar'></div>

					<div>
						Home:
						<ul>
							<li>Research</li>
							<li>Outreach</li>
							<li>Clinical</li>
							<li>The Atlas</li>
						</ul>
					</div>

					<div>
						Visit:
						<ul>
							<li>Maps and Directions</li>
							<li>Parking and Transportation</li>
						</ul>
					</div>

					<div>
						Contact:
						<ul>
							<li>Contact Visible Heart Lab</li>
							<li>{`B172 Mayo, MMC195
								420 Delaware Street S.E.
								Minneapolis, MN 55455`}</li>
						</ul>
					</div>

					<div>
						Search:
						<ul>
							<li>Employment</li>
							<li>Events</li>
							<li>Department Directory</li>

						</ul>
					</div>

					<div>
						Gift
					</div>


					<div>© 2017 Regents of the University of Minnesota. 
					All rights reserved. The University of Minnesota is an equal opportunity educator and employer.</div>
				</div>
			);
	}
}

export default Footer;