import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    activity: String,
    type: String,
    participants: Number,
    price: Number,
    link: String,
    key: String,
    accessibility: Number,
    date: String
})

const TodosSchema = new mongoose.Schema({
    ideas: [TodoSchema],
    completed: [TodoSchema]
})

export default mongoose.model('Todos', TodosSchema)