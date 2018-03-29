import React, { Component } from 'react';
import '../styles/HomeElement.css';


//Need to react to different size screens.
//Container should be flex with boxes,
//then switch to weird descriptions.

class HomeElement extends Component {
	render() {
		return (
				<a className='HomeElement' href={this.props.data.link}>
					<img src={process.env.PUBLIC_URL + "/images/homeelements/" + this.props.data.img_path}/>
					<p class="bottom-centered">{this.props.data.name}</p>
				</a>
			);
	}
}

export default HomeElement;