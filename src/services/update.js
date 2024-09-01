export async function update(token, firstName, lastName) {
	try {
		const response = await fetch('http://localhost:3001/api/v1/user/profile?firstName=value1&lastName=value2', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer' + token
			},
			body: JSON.stringify({ firstName: firstName, lastName: lastName })
		});
		const data = await response.json()
		return data
	} 
	catch (error) {
		console.error('Erreur:', error)
	}
}