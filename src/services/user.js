export async function getUser(token) {
	try {
		const response = await fetch('http://localhost:3001/api/v1/user/profile', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer' + token
			}
		});
		const data = await response.json()
		return data
	} 
	catch (error) {
		console.error('Erreur:', error)
	}
}