const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const Entry = require('./models/entry')
const cors = require('cors');

morgan.token('data', function (req, res) { return JSON.stringify(req.body) })

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
    Entry.find({}).then(entries => {
      res.send(`<div>Phonebook has info for ${entries.length} people</div><br/><div>${Date()}</div>`)
    })
})
  
app.get('/api/persons', (request, response) => {
  Entry.find({}).then(entries => {
    response.json(entries)
  })
})

app.get('/api/persons/:id', (request, response, next) => {
  Entry.findById(request.params.id).then(person => {
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })
  .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Entry.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Entry.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (body.name === undefined || body.number === undefined) {
    return response.status(400).json({ error: 'name or number missing' })
  }

  var foundPerson = null
  Entry.find({"name": body.name}).then(person => {
    if (person) {
      foundPerson = person
    }
  })
  if (foundPerson) {
    const updatedPerson = {
      name: body.name,
      number: body.number
    }
    Entry.findByIdAndUpdate(foundPerson.id, updatedPerson, { new: true })
    .then(person => {
      response.json(person)
    })
    .catch(error => next(error))
  } else {
    const entry = new Entry({
      name: body.name,
      number: body.number
    })

    entry.save()
    .then(savedEntry => savedEntry.toJSON())
    .then(savedAndFormattedEntry => {
      response.json(savedAndFormattedEntry)
    })
    .catch(error => next(error))
  }
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})