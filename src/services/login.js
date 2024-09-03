export async function postData(formData) {
	//Try to connect to the API with the token
	try {
		const response = await fetch('http://localhost:3001/api/v1/user/login?email=value1&password=value2', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: formData.username, password: formData.password })
		})
		//Response expected
		const data = await response.json()
		return data
	} 
	catch (error) {
		console.error('Error:', error)
	}
}