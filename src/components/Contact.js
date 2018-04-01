import React, { Component } from 'react';


class Contact extends Component {
	render() {
		return (
				<div className='contact'>
					<h1> Contact Us!</h1>
					<h1>Questions? Comments? Concerns? Please reach out!</h1>
					<div>
						<p>You can contact us at:</p>
						<a href="mailto:vhlab-info@umn.edu">vhlab-info@umn.edu</a>
						<p>612-624-3959</p>
					</div>

				</div>
			);
	}
}

export default Contact;