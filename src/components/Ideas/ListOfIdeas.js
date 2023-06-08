import PostTemplate from "./PostTemplate"
import { useSelector } from "react-redux/es/hooks/useSelector"
import Slider from "../Slider/Slider"

const ListOfIdeas = () => {

    const todos = useSelector(state => state.todos.todos)
    return (
        <div>
            <h1 className="section-title">Ideas in my list</h1>
            {todos && <Slider items={todos} />}
        </div>
    )
}
export default ListOfIdeas