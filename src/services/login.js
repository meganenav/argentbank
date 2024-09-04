import { adapterLogin } from './dataAdapters.js'

export async function postData(formData) {
	//Call data adapter
	const adaptedData = adapterLogin(formData)
	
	//Try to connect to the API with the token
	try {
		const response = await fetch('http://localhost:3001/api/v1/user/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
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