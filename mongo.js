const mongoose = require('mongoose')

if (process.argv.length !== 3 && process.argv.length !== 5) {
  console.log('Please provide the password as an argument: node mongo.js <password> [<name> <number>]')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3] || null
const number = process.argv[4] || null

const url =
  `mongodb+srv://fullstack:${password}@cluster0.dg6na.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const entrySchema = new mongoose.Schema({
  name: String,
  number: String
})

const Entry = mongoose.model('Entry', entrySchema)

const entry = new Entry({
  name: name,
  number: number
})

if (name) {
  entry.save().then(result => {
    console.log(`added ${result.name} number ${result.number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  console.log('phonebook:')
  Entry.find().then(result => {
    result.forEach(entry => {
      console.log(`${entry.name} ${entry.number}`)
    })
    mongoose.connection.close()
  })
}