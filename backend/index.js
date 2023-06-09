import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import TodosModel from './models/Todos.js'

mongoose.connect('mongodb+srv://andrej122001:MMKHO3KlMzFz7AoG@cluster0.8gyl98w.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err))

const app = express()
const port = 8000

app.use(cors())
app.use(express.json())

app.post('/todos', async (req, res) => {
    const doc = new TodosModel({
        ideas: req.body.ideas,
        completed: req.body.completed
    })

    await TodosModel.deleteMany({})
    const todos = await doc.save()

    res.json(todos)
})

app.get('/todos', async (req, res) => {
    const todos = await TodosModel.find()

    res.json(todos)
})

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})