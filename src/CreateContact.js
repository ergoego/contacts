import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'

class CreateContact extends Component {
	render () {
		return ( // I tried to put another route here going to '/create', but the beauty of this is that you can put all of your routes in the app.js file, and then that just points to a component housed in a separate something.js file. So your app file is pretty clean and just links an action (like clicking a button) to a route, and that route sets 
			<div className='create-contact'> 
				<Link className='close-create-contact' to ="/">Close</Link>
				<form className='create-contact-form'>
					<ImageInput
						className='create-contact-avatar-input'
						name='avatarURL'
						maxHeight={64}
					/>
					<div className='create-contact-details'>
						<input type='text' name='name' placeholder='Name'/>
						<input type='text' name='email' placeholder='Email'/>
						<button>Add Contact</button>
					</div>
				</form>
			</div>
			)
	}
}

export default CreateContact