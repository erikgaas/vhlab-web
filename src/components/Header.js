import React, { Component } from 'react';
import '../styles/Header.css';


class Header extends Component {
	render() {
		return (
				<div className='Header'>
					<div className='UMNHeader'>
						<span>Logo Here. Make this Gold</span>
						<span>Search bar here</span>
					</div>

					<div className='NavButtons'>
						<span>VH Logo</span>
						<span>Navigation Buttons. Remember break points</span>
					</div>
				</div>
			);
	}
}

export default Header;