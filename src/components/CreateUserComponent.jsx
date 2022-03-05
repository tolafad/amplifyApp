import React, { Component } from 'react'
import UserService from '../services/UserService';

class CreateUserComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// step 2
			id: this.props.match.params.id,
			name: '',
			emailId:'',
			buddy:''
		}
		this.changeNameHandler = this.changeNameHandler.bind(this);
		this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
	}

	// step 3
	componentDidMount() {

		// step 4
		UserService.getUserById(this.state.id).then((res) => {
			let user = res.data;
			this.setState({
				name: user.name,
                emailId : user.emailId,
                buddy: user.buddy});
		});

	}
	
	saveOrUpdateUser = (e) => {
		e.preventDefault();
		let user = { name: this.state.name, emailId: this.state.emailId};
		console.log('user => ' + JSON.stringify(user));

		// step 5
		if (this.state.id === '_add') {
			UserService.createUser(user).then(res => {
				this.props.history.push('/users');
			});
		} else {
			UserService.updateUser(user, this.state.id).then(res => {
				this.props.history.push('/users');
			});
		}
	}

	changeNameHandler = (event) => {
		this.setState({ name: event.target.value });
	}

	changeEmailHandler = (event) => {
		this.setState({ emailId: event.target.value });
	}

	cancel() {
		this.props.history.push('/users');
	}

	getTitle() {
		if (this.state.id === '_add') {
			return <h3 className="text-center">Add User</h3>
		} else {
			return <h3 className="text-center">Update User</h3>
		}
	}
	render() {
		return (
			<div>
				<br></br>
				<div className="container">
					<div className="row">
						<div className="card col-md-6 offset-md-3 offset-md-3">
							{
								this.getTitle()
							}
							<div className="card-body">
								<form>
									<div className="form-group">
										<label> Name: </label>
										<input placeholder="Name" name="name" className="form-control"
											value={this.state.name} onChange={this.changeNameHandler} />
									</div>
									<div className="form-group">
										<label> Email Id: </label>
										<input placeholder="Email Address" name="emailId" className="form-control"
											value={this.state.emailId} onChange={this.changeEmailHandler} />
									</div>

									<button className="btn btn-success" onClick={this.saveOrUpdateUser}>Save</button>
									<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
								</form>
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default CreateUserComponent
