const express = require('express')
const app = express()

let persons = [
	{
		"id": 1,
		"name": "Arto Hellas",
		"number": "040-123456"
	},
	{
		"id": 2,
		"name": "Ada Lovelace",
		"number": "453-4651325"
	},
	{
		"id": 3,
		"name": "Dan Abramov",
		"number": "032-52352351"
	},
	{
		"id": 4,
		"name": "Mary Poppendick",
		"number": "342-235231"
	},
	{
		"id": 5,
		"name": "Amy Winehouse",
		"number": "945-4252345"
	}
]

app.get('/api/persons/', (request, response) => {
	response.json(persons)
})

app.get('/info/', (request, response) => {
	//TODO: count persons array
	const countPersons = persons.length
	const time = Date();
	// console.log(personsCount)
	response.send(`<p>Phonebook has info for ${personsCount} people</p><br>${time}`)
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`server running in port ${PORT}`)
})