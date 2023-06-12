import { useState } from "react"
import { Button } from "@mui/material"
import { Container } from "@mui/system"
import { useSelector } from "react-redux/es/exports"
import { useDispatch } from "react-redux/es/exports"
import { replaceCompleted } from "../store/completeSlice"
import { replaceTodo } from "../store/todoSlice"
import Alert from "./Alert"

const Requests = () => {

    const [get, setGet] = useState(false)
    const [post, setPost] = useState(false)

    const ideas = useSelector(state => state.todos.todos)
    const completed = useSelector(state => state.completed.completed)

    const dispatch = useDispatch()

    const getData = () => {
        fetch('http://localhost:8000/todos', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                dispatch(replaceCompleted(data[0].completed))
                dispatch(replaceTodo(data[0].ideas))
                setGet(true)
            })
            .catch(err => console.log(err))
    }

    const postData = () => {

        const data = {
            ideas: ideas,
            completed: completed
        }

        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => setPost(true))
            .catch(err => console.log(err))
    }

    return (
        <Container maxWidth="md">
            <Button onClick={() => getData()}>
                Get todo
            </Button>
            <Button onClick={() => postData()} disabled={(ideas.length || completed.length) ? false : true}>
                Post todo
            </Button>
            {get && <Alert open={get} setOpen={setGet} text={"You've got a to-do list!"} />}
            {post && <Alert open={post} setOpen={setPost} text={'You have sent a to-do list!'} />}
        </Container>
    )
}
export default Requests
