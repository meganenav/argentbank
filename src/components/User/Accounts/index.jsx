import Account from "../../User/Account"

const dataArray = 
[
	{
		"index": "0",
		"title": "Argent Bank Checking (x8349)",
		"amount": "$2,082.79",
		"description" : "Available Balance",
	},
	{
		"index": "1",
		"title": "Argent Bank Savings (x6712)",
		"amount": "$10,928.42",
		"description" : "Available Balance",
	},
	{
		"index": "2",
		"title": "Argent Bank Credit Card (x8349)",
		"amount": "$184.30",
		"description" : "Current Balance",
	}
]
export default function Accounts() {
    const dataAccounts = dataArray.map(data =>
        <Account key={ data.index } title={ data.title } amount={data.amount} description={ data.description } />
    )
	return (
		<>
			<h2 className="sr-only">Accounts</h2>
			{dataAccounts}
		</>
	)
}