export default function Header(props) {

	return (
		<div className="header">
		<h1>Welcome back<br />{ props.name }!</h1>
		<button className="edit-button">Edit Name</button>
		</div>
	)
}