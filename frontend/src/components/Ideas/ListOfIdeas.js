import { Box } from "@mui/material"
import { useSelector } from "react-redux/es/hooks/useSelector"
import Slider from "../Slider/Slider"

const ListOfIdeas = () => {

    const todos = useSelector(state => state.todos.todos)
    return (
        <Box>
            <h1 className="section-title">Ideas in my list</h1>
            {todos && <Slider items={todos} />}
        </Box>
    )
}
export default ListOfIdeas