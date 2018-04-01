import React, { Component } from 'react';
import Image from 'react-image-resizer';
import {Carousel} from 'react-responsive-carousel';
import HomeElement from '../components/HomeElement.js';
import json from '../json/data.json';
import '../styles/Home.css';
import { Timeline } from 'react-twitter-widgets'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';


var carousel = json['carousel'];
var homeElements = json['homeElements'];

class Home extends Component {

	//get full carousel data here

	makeElement(data) {
		return (
			<div key={data.img_path}>
				<img src={process.env.PUBLIC_URL + "/images/carousel/".concat(data.img_path)} />
				<a className="legend" href={data.link}>{data.legend}</a>
			</div>
		);
	}


	render() {
		return (
				<div className='Home'>
					<div className='CarouselContainer'>
						<Carousel className="Carousel" 
									dynamicHeight={false} 
									infiniteLoop={true} 
									autoPlay={true} 
									swipeable={true} 
									emulateTouch={true}
									showThumbs={false}>
							{carousel.map(el => this.makeElement(el))}
						</Carousel>
					</div>

					<div className="HomeElList">
						{homeElements.map(el => <HomeElement data={el} />)}
					</div>

					<div className="ExtraHome">
						<a href="http://www.vhlab.umn.edu/bears/index.html">	
							<img src={process.env.PUBLIC_URL + "/images/bear.png"} height={300}/>
							<h3>MN Black Bear Research</h3>

						</a>
						<a href="http://www.vhlab.umn.edu/atlas/vr/">	
							<img src={process.env.PUBLIC_URL + "/images/VRTour.jpg"} height={300}/>
							<h3>Virtual Reality</h3>

						</a>
						<Timeline dataSource={{sourceType: "profile", screenName: "VisibleHeartLab"}}
							options={{username:"VisibleHeartLab", width:"300px", height:"350"}}/>
					</div>


				</div>

			);
	}
}

export default Home;