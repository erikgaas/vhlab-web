import React, { Component } from 'react';
import '../styles/Footer.css';
import { SocialIcon } from 'react-social-icons';
import ScrollToTop from 'react-scroll-up';
import TiArrowUpThick from 'react-icons/lib/ti/arrow-up-thick';

class Footer extends Component {
	render() {
		const cr = "© 2017 Regents of the University of Minnesota. \
					All rights reserved. The University of Minnesota is an equal opportunity educator and employer.";

		return (
				<div className='FootContainer'>

					<div className='yellow-footer-bar'></div>
					<div className="social">
						<span className="socialEl">
							<SocialIcon url="https://www.facebook.com/VisibleHeartLab/" className="socicon"/>
							<span>Facebook</span>
						</span>

						<span className="socialEl">
							<SocialIcon url="https://twitter.com/VisibleHeartLab" className="socicon"/>
							<span>Twitter</span>
						</span>
						<span className="socialEl">

							<SocialIcon url="https://www.youtube.com/channel/UCwcaO45GJ_v-WrWXEUKCXKw" className="socicon"/>
							<span>Youtube</span>
						</span>
					</div>

					<address>
						B172 Mayo, MMC195
						420 Delaware Street S.E.
						Minneapolis, MN 55455

					</address>



					<ScrollToTop showUnder={160}>
					  <TiArrowUpThick size={50}/>
					</ScrollToTop>

					<div class="cr">© 2017 Regents of the University of Minnesota. 
					All rights reserved.</div>
				</div>
			);
	}
}

export default Footer;