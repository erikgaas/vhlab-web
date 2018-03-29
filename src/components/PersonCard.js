import React, { Component } from 'react';
import CardFlippable from 'react-card-flippable';
import Image from 'react-image-resizer';
import '../styles/PersonCard.css';


class PersonCard extends Component {





	render() {
  console.log(process.env.PUBLIC_URL + "/images/bios/" + this.props.data.img_name);
		return (
          <div className="card-container">
            <div className="card">
              <div className="side"><Image src={process.env.PUBLIC_URL + "/images/bios/" + this.props.data.img_name} height={250} width={250} /></div>
              <div className="side back">
                <div>{this.props.data.name + " " + this.props.data.credentials}</div>
                <div>{this.props.data.position}</div>
                <div>{this.props.data.email}</div>
                <div>{this.props.data.phone}</div>
              </div>
            </div>
          </div>
			);
	}
}

export default PersonCard;