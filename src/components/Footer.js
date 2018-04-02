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
							<a href="https://www.facebook.com/VisibleHeartLab/"><span>Facebook</span></a>
						</span>

						<span className="socialEl">
							<SocialIcon url="https://twitter.com/VisibleHeartLab" className="socicon"/>
							<a href="https://twitter.com/VisibleHeartLab"><span>Twitter</span></a>
						</span>
						<span className="socialEl">

							<SocialIcon url="https://www.youtube.com/channel/UCwcaO45GJ_v-WrWXEUKCXKw" className="socicon"/>
							<a href="https://www.youtube.com/channel/UCwcaO45GJ_v-WrWXEUKCXKw"><span>Youtube</span></a>
						</span>

						<a href="/gift">
						<span className="socialEl">
							<img className="gift" src={process.env.PUBLIC_URL + "/images/icons/gift.png"} width={50} />
							<span>Give a Gift</span>
						</span></a>
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