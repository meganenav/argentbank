import { adapterGetName } from './dataAdapters.js'

export async function getUser(token) {
	//Try to connect to the API with the token
	try {
	  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': 'Bearer ' + token,
		},
	  })
	  
	  //Response expected
	  const data = await response.json()
	  
	  //Call data adapter
	  return adapterGetName(data)

	} catch (error) {
	  console.error('Error:', error)
	}
  }
  