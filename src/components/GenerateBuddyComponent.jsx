import React, { useState, useEffect } from 'react'
import UserService from '../services/UserService'
import { useNavigate } from "react-router-dom";

export const GenerateBuddyComponent = () => {
	let navigate = useNavigate();

	const [users, setUsers] = useState([]);
	const [id, setId] = useState(0);

	useEffect(() => {
		UserService.getUsers().then((res) => {
			console.log('users => ' + JSON.stringify(res.data));
			setUsers(res.data);
		});
	}, [id]);


	const handleChange = e => {
		console.log('handleChange e.target.value => ' + e.target.value);
		setId(e.target.value)

		UserService.generateBuddyById(e.target.value).then((res) => {
			console.log('res.data => ' + JSON.stringify(res.data));
		});

		const l = e.target.value;
		navigate(`/view-user/${l}`);

	}

	return (
		<div>

			<h2 className="text-center">Generate/Retrieve My Prayer Buddy</h2>

			<br></br>
			<div className="container">
				<div className="row">
					<div className="card col-md-6 offset-md-3 offset-md-3">

						<div className="card-body">
							<div>
								<div>
									<label>
										Select Your Name:
										<select onChange={handleChange}>
											<option key="" value=""></option>
											{users.map(user => {
												return (<option key={user.id} value={user.id}>{user.name}</option>);
											})}
										</select>
									</label>
								</div>

							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	)

}

export default GenerateBuddyComponent
