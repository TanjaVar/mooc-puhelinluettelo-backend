const express = require('express')
const app = express()

// express json parser
app.use(express.json())

// stores data for phonebook
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
	const countPersons = persons.length
	const time = Date();
	// console.log(personsCount)
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

/* Implement functionality that allows the phone number information to be deleted by an 
HTTP DELETE request to the URL that identifies the phone number information.*/
app.delete('/api/persons/:id', (request, response) => {
	// search id from params
	const id = Number(request.params.id)
	// filter right info from array
	const person = persons.filter(person => person.id === id)

	response.status(204).end()
})

const generateRandomId = () => {
	const min = 1
	const max = 100000
	const newId = Math.floor(Math.random() * (max - min) + min)
	return newId
}

/* Extend the backend so that new call details can be added with an HTTP POST 
request to http://localhost:3001/api/persons.*/
app.post('/api/persons', (request, response) => {
	const body = request.body

	//throw  error if phonenumber or name is missing from body
	if (!body.number || !body.name) {
		return response.status(400).json({
			error: 'name or id missing'
		})
	}

	const person = {
		id: generateRandomId(),
		name: body.name,
		number: body.number
	}

	persons = persons.concat(person)
	response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`server running in port ${PORT}`)
})