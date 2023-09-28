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
	response.send(`<p>Phonebook has info for ${countPersons} people</p><br>${time}`)
})

app.get('/api/persons/:id', (request, response) => {
	//TODO: search id from params
	const id = Number(request.params.id)
	console.log(id)
	// TODO: search right info with id
	const person = persons.filter(person => person.id === id)
	console.log(person)

	if (person) {
		response.json(person)
		response.status(204).end()
		console.log("person: true")
	} else {
		return response.status(400).json({
			error: 'Invalid id, content missing'
		})
	}
})
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`server running in port ${PORT}`)
})