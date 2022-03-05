import React, { useState, useEffect } from 'react'
import UserService from '../services/UserService'
import { useNavigate } from "react-router-dom";


export const ListUserComponent = () => {

	let navigate = useNavigate();

	const [users, setUsers] = useState([]);

	const deleteUser = (id) => {
		UserService.deleteUser(id).then(res => {
			setUsers({ users: users.filter(user => user.id !== id) });
		});
	}

	const viewUser = (id) => {
		navigate(`/view-user/${id}`);
	};

	const editUser = (id) => {
		navigate(`/add-user/${id}`);
	};

	const generateOrViewBuddy = (id) => {
		UserService.generateBuddyById(id).then((res) => {
			setUsers(res.data);
			});
			navigate(`/view-user/${id}`);
	};

	const addUser = () => {
		navigate(`/add-user/_add`);
	};

	useEffect(() => {
		UserService.getUsers().then((res) => {
			setUsers(res.data);
		});
	}, []);


	return (
		<div>
			<h2 className="text-center">Users List</h2>
			<div className="row">
				<button className="btn btn-primary"></button>
			</div>
			<br></br>
			<div className="row">
				<table className="table table-striped table-bordered">

					<thead>
						<tr>
							<th> User Name</th>
							<th> User Email</th>
							<th> Praying Buddy</th>
							<th> Actions</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map(
								user =>
									<tr key={user.id}>
										<td> {user.name} </td>
										<td> {user.email}</td>
										<td> {user.buddy}</td>
										<td>
											{/*<button onClick={ () => this.editUser(user.id)} className="btn btn-info">Update </button>*/}

											{/* <button style={{ marginLeft: "10px" }} onClick={ () => deleteUser(user.id)} className="btn btn-danger">Delete </button> -->*/}

											<button style={{ marginLeft: "10px" }} onClick={ () => viewUser(user.id)} className="btn btn-info">View </button>
											<button style={{ marginLeft: "10px" }} onClick={ () => generateOrViewBuddy(user.id)} className="btn btn-info">Generate Buddy </button>
										</td>
									</tr>
							)
						}
					</tbody>
				</table>

			</div>

		</div>
	)

}

export default ListUserComponent
