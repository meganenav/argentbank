//Allows to transform data and use them more easily
export function adapterLogin(formData) {
	return {
	  email: formData.username,
	  password: formData.password,
	}
}

export function adapterUpdateName(firstName, lastName) {
	return {
		firstName: firstName, 
		lastName: lastName,
	}
}

export function adapterGetName(data) {
	return {
		firstName: data.body.firstName, 
		lastName: data.body.lastName,
	}
}