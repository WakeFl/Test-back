import { Button } from "@mui/material"
import { Container } from "@mui/system"
import { useSelector } from "react-redux/es/exports"
import { useDispatch } from "react-redux/es/exports"
import { replaceCompleted } from "../store/completeSlice"
import { replaceTodo } from "../store/todoSlice"


const Requests = () => {

    const ideas = useSelector(state => state.todos.todos)
    const completed = useSelector(state => state.completed.completed)

    const dispatch = useDispatch()

    const getData = () => {
        fetch('http://localhost:8000/todos', { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(replaceCompleted(data[0].completed))
                dispatch(replaceTodo(data[0].ideas))
            })
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
            .then(data => console.log(data))
    }

    return (
        <Container maxWidth="md">
            <Button onClick={() => getData()}>
                Get todo
            </Button>
            <Button onClick={() => postData()}>
                Post todo
            </Button>
        </Container>
    )
}
export default Requests