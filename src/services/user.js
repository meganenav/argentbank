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
	  
	  //Data adapter implementation
	  const adaptedData = {
		firstName: data.body.firstName,
		lastName: data.body.lastName
	  }
	  return adaptedData
	} catch (error) {
	  console.error('Error:', error)
	}
  }
  