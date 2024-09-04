import { adapterUpdateName } from './dataAdapters.js'

export async function update(token, firstName, lastName) {
	//Call data adapter
	const adaptedData = adapterUpdateName(firstName, lastName)

	//Try to connect to the API with the token
	try {
		const response = await fetch('http://localhost:3001/api/v1/user/profile', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer' + token
			},
			body: JSON.stringify(adaptedData)
		})
		//Response expected
		const data = await response.json()
		return data
	} 
	catch (error) {
		console.error('Error:', error)
	}
}